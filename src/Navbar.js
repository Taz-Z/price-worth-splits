import logo from "./logo.png";

const Navbar = ({ onClickHandler, currentSelection }) => {
  return (
    <nav className="flex items-center justify-between flex-wrap dark:bg-gray-800 p-6 border-gray-200">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img src={logo} className="pr-5 h-8" />
        <span className="font-semibold text-xl tracking-tight">
          Price Manager
        </span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow"></div>

        <div>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            onClick={() => onClickHandler(1)}
          >
            Crafting
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            onClick={() => onClickHandler(2)}
          >
            Maris
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
