export const EventList = ({ events, handleClick }) => {
  return (
    <div>
      {events.map((event, index) => (
        <div key={event.id}>
          <h2>
            {index} - {event.title}
          </h2>
          <p>
            {event.location} - {event.date}
          </p>
          <button onClick={() => handleClick(event.id)}>Delete Event</button>
        </div>
      ))}
    </div>
  )
}
