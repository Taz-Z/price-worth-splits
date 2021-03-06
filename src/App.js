import { useCallback, useEffect, useState } from "react";
import CraftingList from "./CraftingList";
import Navbar from "./Navbar";

const getTab = (tab) => {
  switch (tab) {
    case 1:
      return <CraftingList />;
    default:
      return <h1>hello</h1>;
  }
};

const App = () => {
  const [tab, setTab] = useState(1);

  const getTabCallback = useCallback(() => {
    return getTab(tab);
  }, [tab]);

  return (
    <>
      <Navbar onClickHandler={setTab} />
      <div className="bg-gray-700 ">{getTabCallback()}</div>
    </>
  );
};

export default App;
