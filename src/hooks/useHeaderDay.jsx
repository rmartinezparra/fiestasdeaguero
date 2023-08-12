import { useState } from 'react';

function useHeaderDay() {
  const [ focusedDay, setFocusedDay ] = useState("14");

  function setDay(day) {
    setFocusedDay(day);
  }

  return {
    focusedDay,
    setDay
  }
}

export default useHeaderDay;