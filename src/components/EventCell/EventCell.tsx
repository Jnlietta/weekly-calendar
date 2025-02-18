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
    const hourHeight = 140;
    const isFree = event.status === 'free'; 
    const isBooked = event.status === 'booked';
    const isBusy = event.status === 'busy';

    return (
        <div 
            key={eventIndex} 
            className={`event-cell flex flex-col place-content-between  text-center font-bold p-1 absolute 
                shadow-md cursor-pointer select-none flex-shrink-0 w-24 h-24 bg-background border-t-4
                ${isFree ? 'border-t-free-800 text-free-800' : ''}
                ${isBooked ? 'border-t-booked-800 text-booked-800' : ''}
                ${isBusy ? 'border-t-busy-800 text-busy-800' : ''}`
            }
            style={{
                top: `${(event.hourStart - columnHours[0]) * hourHeight}px`, // Sets the top position based on the hour
                height: `${hourHeight}px`, 
                width: "100%",
            }}
        >
            <div className="event-time text-xs mb-1">
                {event.hourStart}:00 - {event.hourEnd}:00
            </div>

            <div className="event-title text-base mb-1">
                {event.title}
            </div>

            {isFree ? (
                <div className="event-button text-free-500 text-xs m-1 p-1">
                    Zapisz się
                </div>
            ) : isBooked ? (
                <div className="event-status text-booked-500 text-xs m-1 p-1">
                    Zarezerwowano
                </div>
            ) : isBusy ? (
                <div className="event-status text-busy-500 text-xs m-1 p-1">
                    Termin zajęty
                </div>
            ) : null}
        </div>
    );
    };

export default EventCell;