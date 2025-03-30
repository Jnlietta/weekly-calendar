import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getCurrentWeek, getCurrentWeekMonday } from '../../utils/dateUtils';
import WeekSelector from '../WeekSelector/WeekSelector';
import DayCell from '../DayCell/DayCell';
import EventsList from '../EventsList/EventsList';
import TimeColumn from '../TimeColumn/TimeColumn';
import { getEvents } from '../../redux/eventsRedux';


interface Event {
  date: string;
  hourStart: number;
  hourEnd: number;
  title: string;
  status: 'busy' | 'free' | 'booked';
  showDetails: boolean;
}

const columnHours = Array.from({ length: 16 }, (_, i) => 7 + i);


const WeeklyCalendar: React.FC = () => {
  const [currentWeekStartDate, setCurrentWeekStartDate] = useState<Date>(getCurrentWeekMonday(new Date()));
  
  const events = useSelector(getEvents) as Event[];

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