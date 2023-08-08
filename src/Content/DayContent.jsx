import DayEvent from "./DayEvent.jsx";

function DayContent({infoDay}) {
  return (
    <section className="w-full h-screen border border-blue-500">
      <div className="pt-28 text-center text-white">
        <div className="font-bodoni text-thin text-7xl">{infoDay.day}</div>
        <div>{infoDay.dayWeek}</div>
        <div>
          {
            infoDay.events.map((event, index) => <DayEvent key={index} event={event}/>)
          }
        </div>
      </div>
    </section>
  );
}

export default DayContent;