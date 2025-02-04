import React from "react";
import { formatDateLong } from "../../utils/dateUtils";

interface DayCellProps {
    date: Date;
  }

const DayCell: React.FC<DayCellProps> = ({ date }) => {

return (
  <div className="day-cell border-b-4 font-bold p-2 h-[64px] whitespace-pre-line">{formatDateLong(date)}</div>
  );
};

export default DayCell;