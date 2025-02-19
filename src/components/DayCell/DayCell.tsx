import React from "react";
import { formatDateLong } from "../../utils/dateUtils";

interface DayCellProps {
    date: Date;
  }

const DayCell: React.FC<DayCellProps> = ({ date }) => {

return (
  <div className="day-cell p-2 h-[64px] text-darkText whitespace-pre-line relative z-10">
    <h2>{formatDateLong(date)}</h2>
  </div>
  );
};

export default DayCell;