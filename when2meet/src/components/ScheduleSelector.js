import ScheduleSelector from 'react-schedule-selector';

// importing schedule selector to create calendar interactivity
const ScheduleSelectorCalendar = ({ schedule, handleChange }) => {
  return (
    <ScheduleSelector
      selection={schedule}
      numDays={7}
      minTime={9}
      maxTime={14}
      hourlyChunks={2}
      timeFormat={'h:mm A'}
      dateFormat={'ddd'}
      onChange={handleChange}
      selectedColor={'rgba(84, 161, 8, 1)'}
      unselectedColor={'rgba(255,221,222,255)'}
    />
  );
};

export default ScheduleSelectorCalendar;