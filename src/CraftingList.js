import { useState } from "react";
import Dropdown from "./Dropdown";

const CraftingList = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="grid place-items-center min-h-screen place-content-center justify-self-stretch">
      <Dropdown
        selected={selected}
        handleOnClick={(id) => {
          setSelected(id);
        }}
      />
    </div>
  );
};

export default CraftingList;
