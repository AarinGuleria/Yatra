import React, { useState, useEffect, useRef } from 'react';
import { FaCalendarAlt, FaUser } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Booking: React.FC = () => {
  const [checkInDate, setCheckInDate] = useState<Date | null>(new Date());
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(new Date());
  const [guests, setGuests] = useState(5);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(2);
  const [infants, setInfants] = useState(1);
  const [showGuestOptions, setShowGuestOptions] = useState(false);
  const guestOptionsRef = useRef<HTMLDivElement>(null);

  const toggleGuestOptions = () => setShowGuestOptions(!showGuestOptions);

  const incrementGuests = (type: string) => {
    if (type === 'adults') setAdults(adults + 1);
    if (type === 'children') setChildren(children + 1);
    if (type === 'infants') setInfants(infants + 1);
    setGuests(adults + children + infants + 1);
  };

  const decrementGuests = (type: string) => {
    if (type === 'adults' && adults > 0) setAdults(adults - 1);
    if (type === 'children' && children > 0) setChildren(children - 1);
    if (type === 'infants' && infants > 0) setInfants(infants - 1);
    setGuests(adults + children + infants - 1);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (guestOptionsRef.current && !guestOptionsRef.current.contains(event.target as Node)) {
        setShowGuestOptions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const customDatePickerStyles = `
    .react-datepicker {
      font-family: 'Arial', sans-serif;
      border: none;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
      border-radius: 20px;
      background: rgba(255, 255, 255, 0.95);
      overflow: hidden;
    }
    .react-datepicker__header {
      background-color: #f0f4f8;
      border-bottom: 1px solid #e0e7ff;
      padding-top: 10px;
    }
    .react-datepicker__day-name, .react-datepicker__day {
      width: 2.5rem;
      line-height: 2.5rem;
      margin: 0.2rem;
      color: #4a5568;
      font-weight: 500;
    }
    .react-datepicker__day--selected, .react-datepicker__day--in-selecting-range, .react-datepicker__day--in-range {
      background-color: #667eea;
      color: white;
      border-radius: 50%;
    }
    .react-datepicker__day:hover {
      background-color: #e0e7ff;
      border-radius: 50%;
    }
    .react-datepicker__triangle {
      display: none;
    }
  `;

  return (
    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-3/4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-1 flex justify-between items-center w-4/5 h-24 rounded-full space-x-2 transition-all duration-300 shadow-2xl z-20">
      <div className="w-full h-full bg-white dark:bg-gray-800 bg-opacity-20 dark:bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-full flex justify-between items-center px-8 space-x-4">
        <style>{customDatePickerStyles}</style>
        
        {/* Check-in Date */}
        <div className="relative flex items-center space-x-3 bg-white dark:bg-gray-700 px-4 py-2 rounded-full shadow-md">
          <FaCalendarAlt className="text-lg text-indigo-600 dark:text-indigo-400" />
          <div>
            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">Check in</p>
            <DatePicker
              selected={checkInDate}
              onChange={(date) => setCheckInDate(date)}
              dateFormat="dd MMM yyyy"
              className="text-sm font-bold bg-transparent focus:outline-none text-gray-800 dark:text-gray-200 cursor-pointer"
              popperPlacement="bottom-start"
              popperModifiers={[
                {
                  name: 'offset',
                  options: {
                    offset: [0, 8],
                  },
                },
              ]}
            />
          </div>
        </div>

        {/* Check-out Date */}
        <div className="relative flex items-center space-x-3 bg-white dark:bg-gray-700 px-4 py-2 rounded-full shadow-md">
          <FaCalendarAlt className="text-lg text-indigo-600 dark:text-indigo-400" />
          <div>
            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">Check out</p>
            <DatePicker
              selected={checkOutDate}
              onChange={(date) => setCheckOutDate(date)}
              dateFormat="dd MMM yyyy"
              className="text-sm font-bold bg-transparent focus:outline-none text-gray-800 dark:text-gray-200 cursor-pointer"
              popperPlacement="bottom-start"
              popperModifiers={[
                {
                  name: 'offset',
                  options: {
                    offset: [0, 8],
                  },
                },
              ]}
            />
          </div>
        </div>

        {/* Guests */}
        <div className="relative flex items-center space-x-3 bg-white dark:bg-gray-700 px-4 py-2 rounded-full shadow-md" ref={guestOptionsRef}>
          <FaUser className="text-lg text-indigo-600 dark:text-indigo-400" />
          <div>
            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">Guests</p>
            <div
              className="text-sm font-bold bg-transparent focus:outline-none text-gray-800 dark:text-gray-200 cursor-pointer"
              onClick={toggleGuestOptions}
            >
              {guests} Guests
            </div>

            {/* Guest Options Dropdown */}
            {showGuestOptions && (
              <div className="absolute top-14 right-0 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl space-y-4 z-30 border border-gray-200 dark:border-gray-700">
                {/* Adults */}
                <div className="flex justify-between items-center">
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Adults</p>
                  <div className="flex items-center space-x-2">
                    <button
                      className="bg-indigo-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm hover:bg-indigo-600 transition-colors duration-200 shadow-md"
                      onClick={() => decrementGuests('adults')}
                    >
                      -
                    </button>
                    <p className="text-gray-800 dark:text-gray-200 w-8 text-center text-sm font-bold">{adults}</p>
                    <button
                      className="bg-indigo-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm hover:bg-indigo-600 transition-colors duration-200 shadow-md"
                      onClick={() => incrementGuests('adults')}
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Children */}
                <div className="flex justify-between items-center">
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Children</p>
                  <div className="flex items-center space-x-2">
                    <button
                      className="bg-indigo-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm hover:bg-indigo-600 transition-colors duration-200 shadow-md"
                      onClick={() => decrementGuests('children')}
                    >
                      -
                    </button>
                    <p className="text-gray-800 dark:text-gray-200 w-8 text-center text-sm font-bold">{children}</p>
                    <button
                      className="bg-indigo-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm hover:bg-indigo-600 transition-colors duration-200 shadow-md"
                      onClick={() => incrementGuests('children')}
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Infants */}
                <div className="flex justify-between items-center">
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Infants</p>
                  <div className="flex items-center space-x-2">
                    <button
                      className="bg-indigo-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm hover:bg-indigo-600 transition-colors duration-200 shadow-md"
                      onClick={() => decrementGuests('infants')}
                    >
                      -
                    </button>
                    <p className="text-gray-800 dark:text-gray-200 w-8 text-center text-sm font-bold">{infants}</p>
                    <button
                      className="bg-indigo-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm hover:bg-indigo-600 transition-colors duration-200 shadow-md"
                      onClick={() => incrementGuests('infants')}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Search Button */}
        <button className="bg-indigo-600 p-4 rounded-full hover:bg-indigo-700 transition-colors duration-300 shadow-lg">
          <FiSearch className="text-xl text-white" />
        </button>
      </div>
    </div>
  );
};

export default Booking;
