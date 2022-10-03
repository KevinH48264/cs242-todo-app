import './App.css';
import { DateTag, DateDiv, SelectButton, SelectionDiv } from "./styles"
import { useState } from "react";

function App() {
  // state variables to manage which buttons the user clicks on
  const [selection1, setSelection1] = useState(false);
  const [selection2, setSelection2] = useState(false);
  const [selection3, setSelection3] = useState(false);
  const [selection4, setSelection4] = useState(false);
  const [selection5, setSelection5] = useState(false);

  return (
    <div className="App">
      {/* title of our app and description of this app */}
        <p>Doodle Clone</p>
      <div>
        <p>Kevin Huang is organizing "User Interview Dates"</p>
      </div>
      <div>
        <p>Select your preferred times</p>
      </div>

      {/* this is the section where the user actually selects their dates */}
      <div style={{ backgroundColor: "white", display: "flex", justifyContent: "center" }}>
        {/* this is where the user gets to make selections */}
        <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "flex-end", margin: "15px", marginBottom: "30px"}}>
          You
        </div>

        {/* these divs are the selections for each option */}
        {/* NOTE: All special tags are simply styled-components (imported), which means that it's just CSS applied to typical components like divs and buttons */}
        {/* date 1 option display is below */}
        <SelectionDiv>
          <DateDiv>
            <DateTag>
              MON
            </DateTag>
            <DateTag>
              31
            </DateTag>
            <DateTag>
            OCT
            </DateTag>
            <DateTag>
            12:45 PM
            </DateTag>
            <DateTag>
            2:00 PM
            </DateTag>
          </DateDiv>
          {/* change css appearance when the button is clicked! */}
          <SelectButton onClick={() => {setSelection1(!selection1)}} style={{ backgroundColor: selection1 ? "lightgreen" : "lightgrey" }}/>
        </SelectionDiv>
        {/* date 2 option display is below */}
        <SelectionDiv>
          <DateDiv>
            <DateTag>
              WED
            </DateTag>
            <DateTag>
              2
            </DateTag>
            <DateTag>
            NOV
            </DateTag>
            <DateTag>
            12:45 PM
            </DateTag>
            <DateTag>
            2:00 PM
            </DateTag>
          </DateDiv>
          <SelectButton onClick={() => {setSelection2(!selection2)}} style={{ backgroundColor: selection2 ? "lightgreen" : "lightgrey" }}/>
        </SelectionDiv>
        {/* date 3 option display is below */}
        <SelectionDiv>
          <DateDiv>
            <DateTag>
              MON
            </DateTag>
            <DateTag>
              7
            </DateTag>
            <DateTag>
            NOV
            </DateTag>
            <DateTag>
            12:45 PM
            </DateTag>
            <DateTag>
            2:00 PM
            </DateTag>
          </DateDiv>
          <SelectButton onClick={() => {setSelection3(!selection3)}} style={{ backgroundColor: selection3 ? "lightgreen" : "lightgrey" }}/>
        </SelectionDiv>
        {/* date 4 option display is below */}
        <SelectionDiv>
          <DateDiv>
            <DateTag>
              WED
            </DateTag>
            <DateTag>
              9
            </DateTag>
            <DateTag>
            NOV
            </DateTag>
            <DateTag>
            12:45 PM
            </DateTag>
            <DateTag>
            2:00 PM
            </DateTag>
          </DateDiv>
          <SelectButton onClick={() => {setSelection4(!selection4)}} style={{ backgroundColor: selection4 ? "lightgreen" : "lightgrey" }}/>
        </SelectionDiv>

        {/* date 5 option display is below */}
        <SelectionDiv>
          <DateDiv>
            <DateTag>
              MON
            </DateTag>
            <DateTag>
              14
            </DateTag>
            <DateTag>
            NOV
            </DateTag>
            <DateTag>
            12:45 PM
            </DateTag>
            <DateTag>
            2:00 PM
            </DateTag>
          </DateDiv>
          <SelectButton onClick={() => {setSelection5(!selection5)}} style={{ backgroundColor: selection5 ? "lightgreen" : "lightgrey" }}/>
        </SelectionDiv>
      </div>
    </div>
  );
}

export default App;
