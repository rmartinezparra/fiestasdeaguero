import {Fragment} from "react";

function DayEvent({event}) {
  return (
    <Fragment>
      <div>{event.time}</div>
      <div>{event.description}</div>
    </Fragment>
  );
}

export default DayEvent;