import React from "react";
import { formatDateLong } from "../../utils/dateUtils";

interface DayCellProps {
    date: Date;
  }

const DayCell: React.FC<DayCellProps> = ({ date }) => {

return (
    <p className="day-cell font-bold bg-red-50 p-2 h-[64px] whitespace-pre-line">{formatDateLong(date)}</p>
  );
};

export default DayCell;