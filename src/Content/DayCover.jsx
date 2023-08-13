import escudo from '../assets/escudo.svg';
import {useContext} from "react";
import {HeaderDayContext} from "../context/HeaderDayContext.jsx";

function DayCover() {

  const { setDay } = useContext(HeaderDayContext);
  const day = "14";

  return (
    <section className="w-full h-screen flex" onMouseOver={() => { setDay(day)}} onPointerEnter={ () => { setDay(day)}}>
      <img className="w-3/4 lg:w-2/4 xl:w-1/4 m-auto drop-shadow-2xl" src={escudo} alt="Escudo de Agüero" />
    </section>
  );
}

export default DayCover;