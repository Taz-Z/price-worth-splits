import {  useState } from "react";

const TAX = 0.95;
const DUNGEON_SPLIT = 0.75;
const RAID_SPLIT = 0.875;

const getPrice = (price, isDungeon) => {
  return Math.floor(TAX * (isDungeon ? DUNGEON_SPLIT : RAID_SPLIT) * price);
};


const PriceSplitter = () => {

    const [price, setPrice] = useState(50);

    return (
        <div className="grid place-items-center min-h-screen bg-gray-700 place-content-center">
        <label className="text-lime-50 mb-10 ">
          Please input the price of the item
        </label>
        <input
          type={"number"}
          value={price}
          min="50"
          onChange={(e) => setPrice(Number(e.target.value))}
        />
        <br />
        <span className="text-lime-50" >
          The split price for <b>dungeon groups</b> is: {getPrice(price, true)}
        </span>
        <br />
        <span className="text-lime-50">
          The split price for <b>raid groups</b> is: {getPrice(price, false)}
        </span>
      </div>
    )
}

export default PriceSplitter;