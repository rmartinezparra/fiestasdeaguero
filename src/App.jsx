import './App.css'
import Navbar from "./navbar/Navbar.jsx";
import DayContent from "./Content/DayContent.jsx";
import {Fragment, useState } from "react";
import InfoDaysList from './data/Data.js';

function App() {

  const [infoDays, setInfoDays] = useState(InfoDaysList);

  return (
    <Fragment>
      <div className="w-full h-screen bg-slate-800 flex flex-col scroll-smooth">
        <header>
          <Navbar />
        </header>
        <main className="overflow-y-scroll no-scrollbar">
          {
            infoDays.map((info, index) => <DayContent key={index} infoDay={info} /> )
          }
{/*          <DayContent day="14" />
          <DayContent day="15" />*/}
        </main>
      </div>
    </Fragment>
  );
}

export default App
