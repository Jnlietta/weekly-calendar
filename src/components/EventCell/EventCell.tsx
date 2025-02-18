import React from "react";

interface EventCellProps {
    event: { 
        date: string; 
        hourStart: number; 
        hourEnd: number; 
        title: string; 
        status: 'busy' | 'free' | 'booked'; 
    };
    eventIndex: number;
    columnHours: number[];
}

const EventCell: React.FC<EventCellProps> = ({event, eventIndex, columnHours}) => {
    const hourHeight = 130;
    const isFree = event.status === 'free'; 
    const isBooked = event.status === 'booked';
    const isBusy = event.status === 'busy';

    return (
        <div 
            key={eventIndex} 
            className={`event-cell flex flex-col justify-center items-center rounded text-center p-2 absolute
                ${isFree ? 'bg-free-100 text-free-800' : ''} 
                ${isBooked ? 'bg-booked-100 text-booked-800' : ''}
                ${isBusy ? 'bg-red-100 text-red-800' : ''}
            `}
            style={{
                top: `${(event.hourStart - columnHours[0]) * hourHeight}px`, // Sets the top position based on the hour
                height: `${hourHeight}px`, 
                width: "100%",
            }}
        >
            <div className="event-time text-sm mb-1">
                {event.hourStart}:00 - {event.hourEnd}:00
            </div>

            <div className="event-title text-base mb-1">
                {event.title}
            </div>

            {isFree ? (
                <button className="event-button text-free-500 text-sm py-1 px-3 rounded">
                    Zapisz się
                </button>
            ) : isBooked ? (
                <button className="event-status text-booked-500 text-sm py-1 px-3 rounded">
                    Anuluj rezerwację
                </button>
            ) : isBusy ? (
                <div className="event-status text-red-500 text-sm">
                    Termin zajęty
                </div>
            ) : null}
        </div>
    );
    };

export default EventCell;