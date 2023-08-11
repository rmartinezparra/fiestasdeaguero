function Navbar() {
  return (
    <nav className="backdrop-blur-lg p-1 xl:p-0 2xl:backdrop-blur-none xl:bg-transparent fixed w-full">
      <div className="flex flex-row mx-2 mt-2 xl:mx-10 xl:mt-10">
        <div className="flex-1 text-zinc-200 font-brixton text-base xl:text-xl text-left">
          Fiestas de Agüero 2023
        </div>
        <div className="flex-1 text-zinc-200 font-brixton text-base xl:text-xl text-right">
          Día 14 de Agosto
        </div>
      </div>
    </nav>
  );
}

export default Navbar;