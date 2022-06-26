import { useEffect } from "react";
const useClickOutside = (ref, handleClickOutside) => {
  useEffect(() => {
    function handleClickOutsideWrapper(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        handleClickOutside(true);
      }
    }
    document.addEventListener("mousedown", handleClickOutsideWrapper);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideWrapper);
    };
  }, [ref]);
};

export { useClickOutside };
