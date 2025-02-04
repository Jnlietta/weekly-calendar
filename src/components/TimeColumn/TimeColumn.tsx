import React from 'react';

interface TimeColumnProps {
  hours: number[];
}

const TimeColumn: React.FC<TimeColumnProps> = ({ hours }) => {
    return (
        <div className="time-column flex flex-col w-20 border-r mt-[64px]">
        {hours.map((hour) => (
            <div key={hour} className="flex items-center justify-center border-b h-16 bg-slate-400">
            {hour}:00
            </div>
        ))}
        </div>
    );
};

export default TimeColumn;