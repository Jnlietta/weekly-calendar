import React from 'react';

interface TimeColumnProps {
  hours: number[];
}

const TimeColumn: React.FC<TimeColumnProps> = ({ hours }) => {
    const hourHeight = 140;

    return (
        <div className="time-column flex flex-col w-10 text-xs mt-[64px] text-lightText">
        {hours.map((hour) => (
            <div key={hour} className="flex items-center justify-center relative grid-horizontal-line" style={{ height: `${hourHeight}px` }}>
            {hour}:00
            </div>
        ))}
        </div>
    );
};

export default TimeColumn;