import { Box, useMediaQuery } from '@mui/material';
import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useDispatch } from 'react-redux';
import { changeDate } from 'redux/dayInfo/dayInfoSlice';
import { setFetchDay } from 'redux/dayInfo/operations';

const DateAndCalendar = () => {
  const isTablet = useMediaQuery('(min-width:768px) and (max-width:1279px)');
  const isDisktop = useMediaQuery('((min-width:1280px))');
  const dispatch = useDispatch();

  let topCalendar = '50px';
  let leftCalendar = '-25px';

  if (isTablet) {
    topCalendar = '-150px';
    leftCalendar = '260px';
  }
  if (isDisktop) {
    topCalendar = '-290px';
    leftCalendar = '260px';
  }

  //Календарь
  const [value, onChange] = useState(new Date());
  const day = value.getDate();
  const month = value.getMonth() + 1;
  const year = value.getFullYear();

  const formattedDate = `${day < 10 ? '0' : ''}${day}.${
    month < 10 ? '0' : ''
  }${month}.${year}`; // "18.04.2023"

  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  useEffect(() => {
    const fetchFormatData = { date: value.toISOString().split('T')[0] };
    console.log(fetchFormatData); // "2023-04-18"
    dispatch(changeDate(fetchFormatData));
    dispatch(setFetchDay(fetchFormatData));
  }, [dispatch, value]);

  function openCloseCalendar() {
    setIsCalendarOpen(!isCalendarOpen);
  }
  return (
    <Box
      sx={{
        position: 'relative',

        fontWeight: '700',
        fontSize: '34px',
        lineHeight: '41px',
        color: '#212121',
        display: 'flex',
        gap: '20px',
        marginBottom: '60px',
        alignItems: 'center',
      }}
    >
      <span>{formattedDate}</span>
      <svg
        onClick={openCloseCalendar}
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="none"
      >
        <path fill="#9B9FAA" d="M15 9h-2v2h2V9ZM11 9H9v2h2V9ZM7 9H5v2h2V9Z" />
        <path
          fill="#9B9FAA"
          d="M17 2h-1V0h-2v2H6V0H4v2H3c-1.11 0-1.99.9-1.99 2L1 18a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2Zm0 16H3V7h14v11Z"
        />
      </svg>
      <Box
        sx={{
          position: 'absolute',
          left: leftCalendar,
          top: topCalendar,
          zIndex: '10',
          cursor: 'pointer',
        }}
      >
        {isCalendarOpen && <Calendar onChange={onChange} value={value} />}
      </Box>
    </Box>
  );
};

export default DateAndCalendar;
