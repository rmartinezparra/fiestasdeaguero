import {createContext} from "react";
import useHeaderDay from "../hooks/useHeaderDay.jsx";

export const HeaderDayContext = createContext();

export function HeaderDayProvider({children}) {
  const { focusedDay, setDay } = useHeaderDay();

  return (
    <HeaderDayContext.Provider value={{focusedDay, setDay}}>
      {children}
    </HeaderDayContext.Provider>
  );
}