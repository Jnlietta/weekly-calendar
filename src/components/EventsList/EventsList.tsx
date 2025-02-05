import React from "react";

interface EventsListProps {
  events: { date: string; hour: number; title: string }[];
  date: Date;
  columnHours: number[];
}

const EventsList: React.FC<EventsListProps> = ({ events, date, columnHours }) => {

    const hourHeight = 64;

  return (
    <div className="events-list px-1">
        <ul className="relative">
            {events
            .filter(event => event.date === date.toISOString().split('T')[0])
            .map((event, eventIndex) => (
                <li 
                  key={eventIndex} 
                  className="event-cell h-16 rounded text-center p-2 bg-primary-100 text-primary-900 absolute"
                  style={{
                      top: `${(event.hour - columnHours[0]) * hourHeight}px`, // set the top position based on the hour
                      height: `${hourHeight}px`, 
                      width: "100%",
                  }}
                >
                    {event.title} {event.hour}
                </li>
            ))}
        </ul>
    </div>
  );
};

export default EventsList;