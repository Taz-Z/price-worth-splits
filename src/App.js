import { useCallback, useEffect, useState } from "react";
import Navbar from "./Navbar";
import PriceSplitter from "./PriceSplitter";


const getTab = (tab) => {
  switch(tab) {
    case 1: 
    return <PriceSplitter/>
    default:
      return <hi>hello</hi>
  }

}

const App = () => {
 
  const [tab, setTab] = useState(1)

  const getTabCallback = useCallback(() => {
    return getTab(tab)
  }, [tab])



  return (
    <>
      <Navbar />
      {getTabCallback()}

    </>
  );
};

export default App;
