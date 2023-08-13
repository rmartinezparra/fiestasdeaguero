import './App.css'
import Navbar from "./navbar/Navbar.jsx";
import DayContent from "./Content/DayContent.jsx";
import {Fragment, useState } from "react";
import InfoDaysList from './data/Data.js';
import { HeaderDayProvider } from './context/HeaderDayContext.jsx';

//fonts
import "./assets/fonts/Brixton-Book.ttf";
import "./assets/fonts/BodoniModa-Regular.ttf";
import DayCover from "./Content/DayCover.jsx";

function App() {

  const [infoDays, setInfoDays] = useState(InfoDaysList);

  return (
    <Fragment>
      <div className="flex flex-col scroll-smooth">
        <HeaderDayProvider>
          <div className="bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600">
            <header>
              <Navbar />
            </header>
            <main className="overflow-y-scroll no-scrollbar">
              <DayCover />
              {
                infoDays.map((info, index) => <DayContent key={index} infoDay={info} /> )
              }
            </main>
          </div>
        </HeaderDayProvider>
      </div>
    </Fragment>
  );
}

export default App
