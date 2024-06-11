import React, { useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

function Card({ id, name, info, image, price, removeTour, add, setAdd, tour }) {
  const [readmore, setReadmore] = useState(false);

  const description = readmore ? info : `${info.substring(0, 220)}...`;

  function readmoreHandler() {
    setReadmore(!readmore);
  }

  function clickHandler() {
    if (add.includes(tour.id)) {
      setAdd((prev) => prev.filter((tid) => tid !== tour.id));
      toast.warning("Removed from wishlist");
    } else {
      if (add.length === 0) {
        setAdd([tour.id]);
      } else {
        setAdd((prev) => [...prev, tour.id]);
      }
      toast.success("Added to wishlist");
    }
  }

  function notInteresedHandler(id) {
    removeTour(id);
    toast.warning("Not Interested");
  }

  return (
    <div className="card bg-white h-fit w-[300px] rounded-md p-3 shadow-2xl border-2 border-solid overflow-hidden">
      <div className="relative">
        <img
          className="image bg-zinc-500 rounded-sm h-[40vh] w-full object-cover object-center object-[0%_28%]"
          src={image}
        />
        <div>
          <button
            onClick={clickHandler}
            className="like-button w-[30px] h-[30px] rounded-full absolute bg-white grid place-items-center border border-rose-400 right-[12px] bottom-[-16px] grid place-items-center"
          >
            {add.includes(id) ? (
              <FcLike fontSize="1.25rem" />
            ) : (
              <FcLikePlaceholder fontSize="1.25rem" />
            )}
          </button>
        </div>
      </div>

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
          onClick={() => notInteresedHandler(id)}
          className="btn-red bg-rose-300 px-8 py-1 text-xs font-bold border-2 border-solid border-rose-500 rounded mt-4"
        >
          Not Interested
        </button>
      </div>
    </div>
  );
}

export default Card;
