import { useEffect, useState } from 'react';
import './App.css';

import { Card } from './components/Card';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

import { TypeEvent } from './type/Event';

const App = () => {
  const [events, setEvents] = useState<TypeEvent[]>([])
  const [page, setPage] = useState(0)
  const [moreData, setMoreData] = useState(true)

  useEffect(() => {
    LoadData(page)
  }, [])

  const LoadData = (pageRow : number) => {
    fetch(`${process.env.REACT_APP_HOST_API}/event/${pageRow}`)
    .then((data : Response) => {
      return data.json()      
    })
    .then(list_event => {
      if (list_event.rows.length > 0) {
        setEvents(prevEvents => [...prevEvents, ...list_event.rows])
        setPage(pageRow + 1)
      }else{
        setMoreData(!moreData)
      }
    })
    .catch(error => alert(error.message))
  } 

  var loadMore = () => {
    LoadData(page)
  }

  return (
    <div className="container">
      <Header />
      <section>
        <div>
          {
            events.map((event, i) => {
              return(
                <Card
                event={event}
                i={i}
                />
              )
            })
          }
        </div>
        {
          moreData ? (
            <button 
            className="btn"
            onClick={loadMore}>
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
