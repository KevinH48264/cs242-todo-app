import ScheduleSelector from 'react-schedule-selector';

// ghost schedule for the group availability that copies the user actions
export const ScheduleSelectorCopyCalendar = ({ schedule, handleChange }) => {
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
        selectedColor={'rgba(84, 161, 8, 0.6)'}
        unselectedColor={'rgba(255,221,222,0.25)'}
      />
    );
  };

// Hard coded schedules with opaque colors to accommodate for stacking
export const PartnerSchedule = () => {
  return (
    <ScheduleSelector
      selection={partnerScheduleSelection}
      numDays={7}
      minTime={9}
      maxTime={14}
      hourlyChunks={2}
      unselectedColor={'rgba(255,221,222,0.25)'}
      selectedColor={'rgba(84, 161, 8, 0.6)'}
      timeFormat={'h:mm A'}
      dateFormat={'ddd'}
    />
  );
};

export const partnerScheduleSelection = [
    "2022-10-05T13:30:00.000Z",
    "2022-10-05T14:00:00.000Z",
    "2022-10-05T14:30:00.000Z",
    "2022-10-05T15:00:00.000Z",
    "2022-10-05T15:30:00.000Z",
    "2022-10-03T13:30:00.000Z",
    "2022-10-03T14:00:00.000Z",
    "2022-10-03T14:30:00.000Z",
    "2022-10-03T15:00:00.000Z",
    "2022-10-03T15:30:00.000Z",
    "2022-10-07T13:30:00.000Z",
    "2022-10-07T14:00:00.000Z",
    "2022-10-07T14:30:00.000Z",
    "2022-10-07T15:00:00.000Z",
    "2022-10-07T15:30:00.000Z"
];