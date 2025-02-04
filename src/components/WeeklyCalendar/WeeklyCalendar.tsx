import React, { useState } from 'react';
import { getCurrentWeek } from '../../utils/dateUtils';
import WeekSelector from '../WeekSelector/WeekSelector';
import DayCell from '../DayCell/DayCell';
import EventsList from '../EventsList/EventsList';

const events = [
  { date: '2025-01-29', title: 'Spotkanie z klientem' },
  { date: '2025-02-03', title: 'Spotkanie z klientem' },
  { date: '2025-02-04', title: 'Warsztaty React' },
  { date: '2025-02-05', title: 'Spotkanie zespołu' },
  { date: '2025-02-15', title: 'Spotkanie zespołu' },
  { date: '2025-01-29', title: 'Spotkanie z klientem' },
  { date: '2025-02-03', title: 'Spotkanie z klientem' },
  { date: '2025-02-04', title: 'Warsztaty React' },
  { date: '2025-02-05', title: 'Spotkanie zespołu' },
  { date: '2025-02-15', title: 'Spotkanie zespołu' },
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
    <div className="weekly-calendar flex flex-col items-center gap-4 p-2">
      <WeekSelector
        onChangeWeek={handleWeekChange}
        currentWeekStartDate={currentWeekStartDate}
      />

      <div className="grid grid-cols-7 gap-1 w-full">
        {currentWeek.map((day, index) => (
          <div key={index} className="text-center border">
            <DayCell date={day} />
            <EventsList events={filteredEvents} date={day} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyCalendar;