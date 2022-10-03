import './App.css';
import ScheduleSelectorCalendar from './components/ScheduleSelector'
import { PartnerSchedule, ScheduleSelectorCopyCalendar } from './components/PartnerSchedule'
import React, { useState } from 'react'
import { ScheduleDiv, Text } from "./styles"

function App() {
  // state variable to hold our calendar inputs
  const [schedule, setSchedule] = useState([])
  // state function to handle the schedule as its being selected
  const handleChange = newSchedule => {
    setSchedule(newSchedule);
  }

  return (
    <div className="App">
      {/* just display the headings of what this app is */}
      <div>
        <div>
          <p>When2Meet Clone</p>
        </div>
        <div>
          <p>User Interview</p>
        </div>
      </div>

      {/* this is the bulk of the schedule manipulation display code */}
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>

        {/* this leverages styles.js where I add CSS and make this div fixed. This allows for overlay of schedules with different opacities. */}
        <ScheduleDiv style={{ bottom: 150, right: 800}}>
          {/* Code that displays what this schedule is about */}
          <Text>Your Availability</Text>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Text>Unavailable</Text> 
              <button style={{ marginLeft: '10px', width: "28px", height: "18px", backgroundColor: "rgba(84, 161, 8, 0.9)"}}></button>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginLeft: '20px' }}>
              <Text>Available</Text> 
              <button style={{ marginLeft: '10px', width: "28px", height: "18px", backgroundColor: "rgba(255,221,222,255)"}}></button>
            </div>
          </div>
          <Text style={{ marginBottom: '30px'}}>Click and Drag to Toggle; Saved Immediately</Text>

          {/* this is the actual schedule for the user */}
          <ScheduleSelectorCalendar style={{ bottom: 50, right: 50}} handleChange={handleChange} schedule={schedule}/>
        </ScheduleDiv>

        {/* this is the schedule on the right side for group availability */}
        <ScheduleDiv style={{ bottom: 150, right: 300 }}>
          <Text>Group's Availability</Text>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Text>0/2 Available</Text> 
              <button style={{ marginLeft: '10px', width: "28px", height: "18px", backgroundColor: "rgba(255,221,222,255)"}}/>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '20px' }}>
              <Text>1/2 Available</Text> 
              <button style={{ marginLeft: '10px', width: "28px", height: "18px", backgroundColor: "rgba(84, 161, 8, 0.5)"}}/>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '20px' }}>
              <Text>2/2 Available</Text> 
              <button style={{ marginLeft: '10px', width: "28px", height: "18px", backgroundColor: "rgba(84, 161, 8, 0.9)"}}/>
            </div>
          </div>
          <Text style={{ marginBottom: '30px'}}>Mouseover the Calendar to See Availability</Text>

          {/* this is an imaginary person's data */}
          <PartnerSchedule />
        </ScheduleDiv>

        {/* this is just an overlay but mirroring the user's schedule in real time with a different opacity */}
        <ScheduleDiv style={{ bottom: 150, right: 300 }}>
          <Text>Group's Availability</Text>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Text>0/2 Available</Text> 
              <button style={{ marginLeft: '10px', width: "28px", height: "18px", backgroundColor: "rgba(255,221,222,255)"}}/>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '20px' }}>
              <Text>1/2 Available</Text> 
              <button style={{ marginLeft: '10px', width: "28px", height: "18px", backgroundColor: "rgba(84, 161, 8, 0.5)"}}/>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '20px' }}>
              <Text>2/2 Available</Text> 
              <button style={{ marginLeft: '10px', width: "28px", height: "18px", backgroundColor: "rgba(84, 161, 8, 0.9)"}}/>
            </div>
          </div>
          <Text style={{ marginBottom: '30px'}}>Mouseover the Calendar to See Availability</Text>
          <ScheduleSelectorCopyCalendar handleChange={handleChange} schedule={schedule}/>
        </ScheduleDiv>
      </div>
    </div>
  );
}

export default App;
