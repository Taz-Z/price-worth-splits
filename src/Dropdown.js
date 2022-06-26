import { useState, useRef } from "react";
import { useClickOutside } from "./hooks";

const Dropdown = ({ selected, handleOnClick }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const items = require("./assets/items.json");

  const dropdownRef = useRef(null);

  useClickOutside(dropdownRef, () => {
    setShowDropdown(false);
  });

  const onClickHandler = (e, id) => {
    e.preventDefault();
    setShowDropdown(false);
    handleOnClick(id);
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div>
        <button
          type="button"
          onClick={() => setShowDropdown((p) => !p)}
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          {selected ? items[selected].name : "Options"}
        </button>
      </div>
      {showDropdown && (
        <div
          className="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        >
          <div className="py-1" role="none">
            <ul>
              {Object.entries(items).map(([id, item]) => {
                return (
                  <li key={id}>
                    <a
                      href="#"
                      onClick={(e) => {
                        onClickHandler(e, id);
                      }}
                      className="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-0"
                    >
                      {selected === id ? <b>{item.name}</b> : item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
