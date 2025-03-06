import React, { useState } from 'react';
import { getCurrentWeek, getCurrentWeekMonday } from '../../utils/dateUtils';
import WeekSelector from '../WeekSelector/WeekSelector';
import DayCell from '../DayCell/DayCell';
import EventsList from '../EventsList/EventsList';
import TimeColumn from '../TimeColumn/TimeColumn';

const columnHours = Array.from({ length: 16 }, (_, i) => 7 + i);

const events = [
  { date: '2025-01-29', hourStart: 7, hourEnd: 8, title: 'Spotkanie z klientem', status: 'busy' as 'busy' },
  { date: '2025-02-03', hourStart: 8, hourEnd: 9, title: 'Spotkanie z klientem', status: 'free' as 'free' },
  { date: '2025-02-04', hourStart: 9, hourEnd: 10, title: 'Warsztaty React', status: 'busy' as 'busy' },
  { date: '2025-02-05', hourStart: 10, hourEnd: 11, title: 'Spotkanie zespołu', status: 'booked' as 'booked' },
  { date: '2025-02-15', hourStart: 11, hourEnd: 12, title: 'Spotkanie zespołu', status: 'free' as 'free' },
  { date: '2025-01-29', hourStart: 12, hourEnd: 13, title: 'Spotkanie z klientem', status: 'busy' as 'busy' },
  { date: '2025-02-03', hourStart: 13, hourEnd: 14, title: 'Spotkanie z klientem', status: 'free' as 'free' },
  { date: '2025-02-04', hourStart: 14, hourEnd: 15, title: 'Warsztaty React', status: 'free' as 'free' },
  { date: '2025-02-05', hourStart: 15, hourEnd: 16, title: 'Spotkanie zespołu', status: 'busy' as 'busy' },
  { date: '2025-02-15', hourStart: 16, hourEnd: 17, title: 'Spotkanie zespołu', status: 'free' as 'free' },
  { date: '2025-01-29', hourStart: 17, hourEnd: 18, title: 'Spotkanie z klientem', status: 'busy' as 'busy' },
  { date: '2025-02-03', hourStart: 18, hourEnd: 19, title: 'Spotkanie z klientem', status: 'free' as 'free' },
  { date: '2025-02-04', hourStart: 19, hourEnd: 20, title: 'Warsztaty React', status: 'free' as 'free' },
  { date: '2025-02-05', hourStart: 20, hourEnd: 21, title: 'Spotkanie zespołu', status: 'free' as 'free' },
  { date: '2025-02-15', hourStart: 21, hourEnd: 22, title: 'Spotkanie zespołu', status: 'free' as 'free' },
  { date: '2025-02-18', hourStart: 8, hourEnd: 9, title: 'Warsztaty JavaScript', status: 'free' as 'free' },
  { date: '2025-02-19', hourStart: 10, hourEnd: 11, title: 'Spotkanie z zespołem IT', status: 'busy' as 'busy' },
  { date: '2025-02-20', hourStart: 14, hourEnd: 15, title: 'Szkolenie UX', status: 'free' as 'free' },
  { date: '2025-02-21', hourStart: 16, hourEnd: 17, title: 'Spotkanie z klientem', status: 'booked' as 'booked' },
  { date: '2025-02-22', hourStart: 9, hourEnd: 10, title: 'Spotkanie zespołu', status: 'free' as 'free' },
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
    <div className="weekly-calendar flex flex-col items-center gap-4 p-2">
      <WeekSelector
        onChangeWeek={handleWeekChange}
        currentWeekStartDate={currentWeekStartDate}
      />

      <div className='calendar-container flex w-full rounded-sm bg-white shadow-[0px_2px_4px_0px_rgba(0,0,0,0.5)] overflow-hidden relative day-cell-background'>
        <TimeColumn hours={columnHours} />

        <div className="calendar grid grid-cols-7 flex-1">
          {currentWeek.map((day, index) => (
            <div key={index} className="calendar-column text-center border-dotted border-l">
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