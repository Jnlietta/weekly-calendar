import React from "react";
import { formatDateLong } from "../../utils/dateUtils";

interface DayCellProps {
    date: Date;
  }

const DayCell: React.FC<DayCellProps> = ({ date }) => {

return (
  <div className="day-cell  border-b-4 p-2 h-[64px] text-dark whitespace-pre-line">
    <h2>{formatDateLong(date)}</h2>
  </div>
  );
};

export default DayCell;