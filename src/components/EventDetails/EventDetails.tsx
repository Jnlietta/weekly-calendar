import React from "react";

interface EventDetailsProps {
  event: { 
    id: number;
    date: string; 
    hourStart: number; 
    hourEnd: number; 
    title: string; 
    status: 'busy' | 'free' | 'booked'; 
    showDetails: boolean;
  };
}

const EventDetails: React.FC<EventDetailsProps> = ({ event }) => {
    const isFree = event.status === 'free'; 
    const isBooked = event.status === 'booked';
    const isBusy = event.status === 'busy';

  return (
    <div className="event-details text-center">
        <h2 className="text-xl font-bold m-2">{event.title}</h2>
        <p className="text-sm m-2">{event.hourStart}:00 - {event.hourEnd}:00</p>
        <button className={`m-3 p-2 text-white rounded-lg ${isFree ? 'bg-free-800' : ''} ${isBooked ? 'bg-booked-800' : ''} ${isBusy ? 'bg-busy-800' : ''}`}>
            {isFree ? 'Zapisz się' : ''}
            {isBooked ? 'Odwołaj' : ''}
            {isBusy ? 'Zapisz na listę rezerwową' : ''}
        </button>
    </div>
  );
}

export default EventDetails;