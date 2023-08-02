function Navbar() {
  return (
    <nav className="bg-transparent absolute w-full">
      <div className="flex flex-row mx-10 mt-10">
        <div className="flex-1 border border-rose-500">
          Fiestas de Agüero 2023
        </div>
        <div className="flex-1 border border-blue-500">
          Selector
        </div>
      </div>
    </nav>
  );
}

export default Navbar;