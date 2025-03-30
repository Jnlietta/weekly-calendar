import React from "react";
import EventCell from "../EventCell/EventCell";

interface EventsListProps {
  events: { 
    id: number;
    date: string; 
    hourStart: number; 
    hourEnd: number; 
    title: string; 
    status: 'busy' | 'free' | 'booked'; 
    showDetails: boolean;
  }[];
  date: Date;
  columnHours: number[];
}

const EventsList: React.FC<EventsListProps> = ({ events, date, columnHours }) => {


  return (
    <div className="events-list">
        <div className="relative">
            {events
            .filter(event => event.date === date.toISOString().split('T')[0])
            .map(event => (
                <EventCell 
                    key={event.id} 
                    event={event} 
                    columnHours={columnHours}
                />
            ))}
        </div>
    </div>
  );
};

export default EventsList;