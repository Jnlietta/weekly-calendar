import React from "react";
import EventCell from "../EventCell/EventCell";

interface EventsListProps {
  events: { 
    date: string; 
    hourStart: number; 
    hourEnd: number; 
    title: string; 
    status: 'busy' | 'free' | 'booked'; 
  }[];
  date: Date;
  columnHours: number[];
}

const EventsList: React.FC<EventsListProps> = ({ events, date, columnHours }) => {


  return (
    <div className="events-list px-1">
        <div className="relative">
            {events
            .filter(event => event.date === date.toISOString().split('T')[0])
            .map((event, eventIndex) => (
                <EventCell 
                    key={eventIndex} 
                    event={event} 
                    eventIndex={eventIndex} 
                    columnHours={columnHours}
                />
            ))}
        </div>
    </div>
  );
};

export default EventsList;