import React from "react";
import { formatDateLong } from "../../utils/dateUtils";

interface DayCellProps {
    date: Date;
  }

const DayCell: React.FC<DayCellProps> = ({ date }) => {

return (
    <p className="font-bold bg-red-50 p-2">{formatDateLong(date)}</p>
);
};

export default DayCell;