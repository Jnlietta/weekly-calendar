import React, { useState } from 'react';
import { getCurrentWeek } from '../../utils/dateUtils';
import WeekSelector from '../WeekSelector/WeekSelector';

const events = [
  { date: '2025-01-29', title: 'Spotkanie z klientem' },
  { date: '2025-02-03', title: 'Spotkanie z klientem' },
  { date: '2025-02-04', title: 'Warsztaty React' },
  { date: '2025-02-05', title: 'Spotkanie zespołu' },
  { date: '2025-02-15', title: 'Spotkanie zespołu' },
];

const WeeklyCalendar: React.FC = () => {
  const [currentWeekStartDate, setCurrentWeekStartDate] = useState<Date>(new Date());

  const handleWeekChange = (newWeekStartDate: Date) => {
    setCurrentWeekStartDate(newWeekStartDate);
  };

  const currentWeek = getCurrentWeek(currentWeekStartDate);

  const filteredEvents = events.filter(event => 
    currentWeek.some(day => day.toISOString().split('T')[0] === event.date)
  );

  return (
    <div className="weekly-calendar flex flex-col items-center gap-4 border">
      <WeekSelector
        onChangeWeek={handleWeekChange}
        currentWeekStartDate={currentWeekStartDate}
      />

      <div className="grid grid-cols-7 gap-2 w-full">
        {currentWeek.map((day, index) => (
          <div key={index} className="text-center font-bold border p-2">
            <p className="font-bold">{day.toLocaleDateString('pl-PL', { weekday: 'long', day: 'numeric', month: '2-digit'})}</p>
            <ul>
              {filteredEvents
                .filter(event => event.date === day.toISOString().split('T')[0])
                .map((event, eventIndex) => (
                  <li key={eventIndex}>{event.title}</li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyCalendar;