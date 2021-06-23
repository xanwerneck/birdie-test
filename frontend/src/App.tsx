import { useCallback, useEffect, useState } from 'react';
import './App.css';

import { Card } from './components/Card';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

import { TypeEvent } from './type/Event';

const UrlEndpoint = process.env.REACT_APP_HOST_API || 'https://birdie-back-end.herokuapp.com'

const App = () => {
  const [events, setEvents] = useState<TypeEvent[]>([])
  const [page, setPage] = useState(0)
  const [moreData, setMoreData] = useState(true)

  const LoadData = useCallback(
    () => {
      fetch(`${UrlEndpoint}/event/${page}`)
      .then((data : Response) => {
        return data.json()      
      })
      .then(list_event => {
        if (list_event.rows.length) {
          setEvents(prevEvents => [...prevEvents, ...list_event.rows])
        }else{
          setMoreData(moreData => !moreData)
        }
      })
      .catch(error => alert(error.message))
    },
    [page]
  )

  const LoadMore = () => setPage(page + 1)

  useEffect(LoadData, [LoadData])

  return (
    <div className="container">
      <Header />
      <section>
        <div className="events">
          {
            events.map((event, _) => {
              return(
                <Card event={event}/>
              )
            })
          }
        </div>
        {
          moreData ? (
            <button className="btn"
            onClick={LoadMore}>
              Load more
            </button>
          ) : null
        }
      </section>
      <Footer />
    </div>
  )
}

export default App;
