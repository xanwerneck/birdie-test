import { TypeEvent } from "../type/Event";

type CardProps = {
    event : TypeEvent,
    i : number
}

export const Card = ({event, i} : CardProps) => {
    return (
        <div 
        className="card" 
        key={i}>
            <h4>{event.id}</h4>
            <h6>
                {(new Date(event.timestamp.substr(0,10))).toLocaleDateString()}
            </h6>
        </div>
    )
}