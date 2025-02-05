import React, { useState } from 'react';
import { getCurrentWeek, getCurrentWeekMonday } from '../../utils/dateUtils';
import WeekSelector from '../WeekSelector/WeekSelector';
import DayCell from '../DayCell/DayCell';
import EventsList from '../EventsList/EventsList';
import TimeColumn from '../TimeColumn/TimeColumn';

const columnHours = Array.from({ length: 16 }, (_, i) => 7 + i);

const events = [
  { date: '2025-01-29', hour: 7, title: 'Spotkanie z klientem' },
  { date: '2025-02-03', hour: 8, title: 'Spotkanie z klientem' },
  { date: '2025-02-04', hour: 9, title: 'Warsztaty React' },
  { date: '2025-02-05', hour: 10, title: 'Spotkanie zespołu' },
  { date: '2025-02-15', hour: 11, title: 'Spotkanie zespołu' },
  { date: '2025-01-29', hour: 12, title: 'Spotkanie z klientem' },
  { date: '2025-02-03', hour: 13, title: 'Spotkanie z klientem' },
  { date: '2025-02-04', hour: 14, title: 'Warsztaty React' },
  { date: '2025-02-05', hour: 15, title: 'Spotkanie zespołu' },
  { date: '2025-02-15', hour: 16, title: 'Spotkanie zespołu' },
  { date: '2025-01-29', hour: 17, title: 'Spotkanie z klientem' },
  { date: '2025-02-03', hour: 18, title: 'Spotkanie z klientem' },
  { date: '2025-02-04', hour: 19, title: 'Warsztaty React' },
  { date: '2025-02-05', hour: 20, title: 'Spotkanie zespołu' },
  { date: '2025-02-15', hour: 21, title: 'Spotkanie zespołu' },
];

const WeeklyCalendar: React.FC = () => {
  const [currentWeekStartDate, setCurrentWeekStartDate] = useState<Date>(getCurrentWeekMonday(new Date()));
  
  const handleWeekChange = (newWeekStartDate: Date) => {
    setCurrentWeekStartDate(newWeekStartDate);
  };

  const currentWeek = getCurrentWeek(currentWeekStartDate);

  const filteredEvents = events.filter(event => 
    currentWeek.some(day => day.toISOString().split('T')[0] === event.date)
  );

  return (
    <div className="weekly-calendar flex flex-col items-center gap-4 p-2 bg-background">
      <WeekSelector
        onChangeWeek={handleWeekChange}
        currentWeekStartDate={currentWeekStartDate}
      />

      <div className='flex w-full'>
        <TimeColumn hours={columnHours} />

        <div className="calendar grid grid-cols-7 flex-1 border-4 rounded-3xl overflow-hidden">
          {currentWeek.map((day, index) => (
            <div key={index} className="calendar-column text-center">
              <DayCell date={day} />
              <EventsList 
                events={filteredEvents}
                date={day}
                columnHours={columnHours}
              />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default WeeklyCalendar;