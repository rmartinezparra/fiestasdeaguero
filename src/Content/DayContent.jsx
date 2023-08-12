import DayEvent from "./DayEvent.jsx";
import {HeaderDayContext} from "../context/HeaderDayContext.jsx";
import {useContext} from "react";

function DayContent({infoDay}) {

  const { setDay } = useContext(HeaderDayContext);

  return (
    <section className="w-full min-h-min xl:h-screen" onMouseOver={() => { setDay(infoDay.day)}}>
      <div className="pt-20 xl:pt-28 text-center text-zinc-200 flex flex-col antialiased">
        <div className="flex-auto font-bodoni font-bold text-5xl xl:text-8xl">{infoDay.day}</div>
        <div className="flex-auto font-brixton font-thin text-2xl xl:text-3xl uppercase tracking-widest underline decoration-solid decoration-1">{infoDay.dayWeek}</div>
        <div className="flex-auto mt-3">
          {
            infoDay.events.map((event, index) => <DayEvent key={index} event={event}/>)
          }
        </div>
      </div>
    </section>
  );
}

export default DayContent;