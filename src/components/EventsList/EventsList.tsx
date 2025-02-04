import React from "react";

interface EventsListProps {
  events: { date: string; title: string }[];
  date: Date;
}

const EventsList: React.FC<EventsListProps> = ({ events, date }) => {

  return (
    <ul>
        {events
        .filter(event => event.date === date.toISOString().split('T')[0])
        .map((event, eventIndex) => (
            <li key={eventIndex}>{event.title}</li>
        ))}
    </ul>
  );
};

export default EventsList;