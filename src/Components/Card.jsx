import React, { useState } from "react";

function Card({ id, name, info, image, price, removeTour }) {
  const [readmore, setReadmore] = useState(false);

  const description = readmore ? info : `${info.substring(0, 220)}...`;

  function readmoreHandler() {
    setReadmore(!readmore);
  }

  return (
    <div className="card bg-white h-fit w-[20vw] rounded-md p-3 shadow-2xl border-2 border-solid">
      <img
        className="image bg-zinc-500 rounded-sm h-[40vh] w-full object-cover object-center object-[0%_28%]"
        src={image}
        alt=""
      />

      <div className="tour-info">
        <div className="tour-details">
          <h4 className="tour-price text-green-600 font-black text-base mt-2">
            $ {price}
          </h4>
          <h4 className="tour-name font-black">{name}</h4>
        </div>

        <div className="description text-xs tracking-tight font-medium">
          {description}

          <span
            onClick={readmoreHandler}
            className="cursor-pointer read-more text-[#4cb9fa]"
          >
            {readmore ? "Show less" : "Read more"}
          </span>
        </div>
      </div>

      <div className="flex justify-center">
        <button
          onClick={() => removeTour(id)}
          className="btn-red bg-rose-300 px-8 py-1 text-xs font-bold border-2 border-solid border-rose-500 rounded mt-4"
        >
          Not Interested
        </button>
      </div>
    </div>
  );
}

export default Card;
