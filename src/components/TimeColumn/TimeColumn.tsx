import React from 'react';

interface TimeColumnProps {
  hours: number[];
}

const TimeColumn: React.FC<TimeColumnProps> = ({ hours }) => {
    return (
        <div className="time-column flex flex-col w-20 mt-[64px]">
        {hours.map((hour) => (
            <div key={hour} className="flex items-center justify-center h-16">
            {hour}:00
            </div>
        ))}
        </div>
    );
};

export default TimeColumn;