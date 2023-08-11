function DayEvent({event}) {

  return (
    <div className="grid grid-cols-1 xl:inline-flex mx-1.5 xl:w-8/12 xl:align-text-top">
      <div className="xl:flex-none order-1 font-bodoni p-1 text-xl xl:text-xl">{event.time}</div>
      <div className="xl:flex-1 order-2 font-brixton p-2 text-lg xl:text-lg text-center xl:text-justify break-words">{event.description}</div>
    </div>
  );
}

export default DayEvent;