import React, { useEffect, useState } from "react"
import { getEvents } from "../../managers/EventManager.js"

export const EventList = (props) => {
    const [ events, setEvents ] = useState([]);

    useEffect(() => {
        getEvents().then(data => setEvents(data))
    }, [])

  return (
    <article className="events">
      {events.map((event) => {
        return (
          <section key={`event--${event.id}`} className="event">
            <div className="event__game">
              Event for {event.game}
            </div>
            <div className="event__description">
              {event.description}
            </div>
            <div className="event__date">
              Event starts on {event.date} at {event.time}
            </div>
            <div className="event__organizer">
              Event is organized by {event.organizer}
            </div>
          </section>
        );
      })}
    </article>
  );
};