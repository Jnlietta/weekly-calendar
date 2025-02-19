import React from 'react';
import { formatDateShort } from '../../utils/dateUtils';

interface WeekSelectorProps {
  onChangeWeek: (newWeekStartDate: Date) => void;
  currentWeekStartDate: Date;
}

const WeekSelector: React.FC<WeekSelectorProps> = ({ onChangeWeek, currentWeekStartDate }) => {
    const startDayFormated = formatDateShort(currentWeekStartDate);
    const endDayFormated = formatDateShort(new Date(currentWeekStartDate.getTime() + 6 * 24 * 60 * 60 * 1000));

    const handlePrevWeek = () => {
        const prevWeek = new Date(currentWeekStartDate);
        prevWeek.setDate(prevWeek.getDate() - 7);
        onChangeWeek(prevWeek);
    };

    const handleNextWeek = () => {
        const nextWeek = new Date(currentWeekStartDate);
        nextWeek.setDate(nextWeek.getDate() + 7);
        onChangeWeek(nextWeek);
    };

    return (
        <div className="week-selector flex justify-between items-center gap-4 text-darkText">
        <button onClick={handlePrevWeek} className='font-bold'>Poprzedni tydzień</button>
        <span>{startDayFormated} - {endDayFormated}</span>
        <button onClick={handleNextWeek} className='font-bold'>Następny tydzień</button>
        </div>
    );
};

export default WeekSelector;