function DayEvent({event}) {

  return (
    <div className="flex inline-flex w-8/12 align-text-top">
      <div className="font-bodoni p-1 text-xl">{event.time}</div>
      <div className="font-brixton p-2 text-lg text-justify break-words">{event.description}</div>
    </div>
  );
}

export default DayEvent;