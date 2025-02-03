import React from "react";

const WeeklyCalendar: React.FC = () => {
  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div className="weekly-calendar flex flex-col items-center gap-4 border">
      <h1>Weekly Calendar</h1>
      <div className="flex justify-between gap-4">
        <button>Previous</button>
        <h2>Monday date - Sunday date</h2>
        <button>Next</button>
      </div>
      <div className="grid grid-cols-7 gap-1 w-full">
        {daysOfWeek.map((day) => (
          <div key={day} className="text-center font-bold border p-2">
            <div className="text-red-950">{day}</div>
            <div>Events</div>
            <div>Events</div>
            <div>Events</div>
            <div>Events</div>
            <div>Events</div>
            <div>Events</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyCalendar;