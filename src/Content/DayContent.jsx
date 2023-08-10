import DayEvent from "./DayEvent.jsx";

function DayContent({infoDay}) {
  return (
    <section className="w-full h-screen">
      <div className="pt-28 text-center text-zinc-200 flex flex-col">
        <div className="flex-auto font-bodoni font-bold text-8xl">{infoDay.day}</div>
        <div className="flex-auto font-brixton font-thin text-3xl uppercase tracking-widest underline decoration-solid decoration-1">{infoDay.dayWeek}</div>
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