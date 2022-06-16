import { useEffect, useState } from "react";
const TAX = 0.95;
const DUNGEON_SPLIT = 0.75;
const RAID_SPLIT = 0.875;

const getPrice = (price, isDungeon) => {
  return Math.floor(TAX * (isDungeon ? DUNGEON_SPLIT : RAID_SPLIT) * price);
};

const App = () => {
  const [price, setPrice] = useState(50);

  return (
    <div>
      <label>
        Please input the price of the item
        <input
          type={"number"}
          value={price}
          min="50"
          onChange={(e) => setPrice(Number(e.target.value))}
        ></input>
      </label>
      <br />
      <span>
        The split price for <b>dungeon groups</b> is: {getPrice(price, true)}
      </span>
      <br />
      <span>
        The split price for <b>raid groups</b> is: {getPrice(price, false)}
      </span>
    </div>
  );
};

export default App;
