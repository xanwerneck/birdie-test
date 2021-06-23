import { TypeEvent } from "../type/Event";

type CardProps = {
    event : TypeEvent
}

const ToWords = (event_type : string) => {
    var words = event_type.split('_')
    words[0]  = `${words[0].charAt(0).toUpperCase()}${words[0].slice(1)}` 
    return words.join(' ')
}

export const Card = ({event} : CardProps) => {
    return (
        <div 
        className="card" 
        key={event.id}>
            <p>
                <span>Activity: </span>
                <strong>  
                    {ToWords(event.event_type)}
                </strong>
            </p>
            <p>
                <span>Observed by: </span>
                <strong>  
                    {event.caregiver_id}
                </strong>
            </p>
            <h6>
                <span>Date: </span>
                <strong>  
                    {(new Date(event.timestamp)).toLocaleString()}
                </strong> 
            </h6>
        </div>
    )
}