import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

const Date = () => {
  return (
    <>
      <div className="relative flex items-center justify-end h-full">
        <div className="absolute z-10 pr-8">
          <div>
            <FaRegCalendarAlt  className='text-1xl text-white'/>
          </div>
          <DatePicker
            className='w-full h-full'
            placeholder='Select Date'   
          />
        </div>
      </div>
    </>
  );
};

export default Date;
