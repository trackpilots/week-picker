import React, { useState } from 'react';
import dayjs from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

dayjs.extend(isoWeek);

const WeekPicker = ({ onChange }) => {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  
  const getWeekRange = (date) => {
    const startOfWeek = date.startOf('isoWeek');
    const endOfWeek = date.endOf('isoWeek');
    return { startOfWeek, endOfWeek };
  };

  const handleWeekChange = (date) => {
    const { startOfWeek, endOfWeek } = getWeekRange(date);
    setSelectedDate(date);
    onChange && onChange({ startDate: new Date(startOfWeek), endDate: new Date(endOfWeek) });
  };

  const handlePrevWeek = () => handleWeekChange(selectedDate.subtract(1, 'week'));
  const handleNextWeek = () => handleWeekChange(selectedDate.add(1, 'week'));

  const { startOfWeek, endOfWeek } = getWeekRange(selectedDate);

  return (
    <div className="flex items-center space-x-4 p-2 bg-white border rounded-full">
      {/* Previous Week Button with Icon */}
      <button 
        onClick={handlePrevWeek} 
        className="p-2 bg-gray-100 hover:bg-gray-300 rounded-full"
      >
        <AiOutlineLeft className="text-sm" />
      </button>

      {/* Display Current Week */}
      <span>
        {startOfWeek.format('DD MMM')} - {endOfWeek.format('DD MMM')}
      </span>

      {/* Next Week Button with Icon */}
      <button 
        onClick={handleNextWeek} 
        className="p-2 bg-gray-100 hover:bg-gray-300 rounded-full"
      >
        <AiOutlineRight className="text-sm" />
      </button>
    </div>
  );
};

export default WeekPicker;
