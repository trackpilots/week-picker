import React, { useState } from 'react';
import dayjs from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'; // Import icons
dayjs.extend(isoWeek);

const WeekPicker = ({ onChange }) => {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  
  const startOfWeek = selectedDate.startOf('isoWeek');
  const endOfWeek = selectedDate.endOf('isoWeek');

  const handlePrevWeek = () => {
    const prevWeek = selectedDate.subtract(1, 'week');
    setSelectedDate(prevWeek);
    onChange && onChange(prevWeek);
  };

  const handleNextWeek = () => {
    const nextWeek = selectedDate.add(1, 'week');
    setSelectedDate(nextWeek);
    onChange && onChange(nextWeek);
  };

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
      <span className="">
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
