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
            /*
             add.includes(tour.id) checks if tour.id is already inside the add array.
             If yes, it means the tour is already in the wishlist, so we need to remove it.
             */
            setAdd((curr) => curr.filter((tid) => tid !== tour.id));
            toast.warning("Removed from wishlist");
            /*
            .filter((tid) => tid !== tour.id) removes tour.id from the add array by keeping only the IDs that are not equal to tour.id.
            toast.warning("Removed from wishlist") shows a warning message.
            */
        } else {
            if (add.length === 0) {
                setAdd([tour.id]);
                /*
                If add.length === 0, it means the wishlist is empty, so we set it to [tour.id].
                Otherwise, we update the array by adding the new tour.id
                */
            } else {
                setAdd((curr) => [...curr, tour.id]);
                /*
                 curr represents the current state (add array).
                [...] spreads the existing IDs and adds the new one.
                 */
            }
            toast.success("Added to wishlist");
            // toast.success("Added to wishlist") displays a success message.
        }
    }

    function notInteresedHandler(id) {
        removeTour(id);
        toast.warning("Not Interested");
    }

    return (
        <div className="card bg-white h-fit w-[300px] rounded-md p-3 shadow-xl hover:shadow-2xl ease-linear transition-all border-2 border-solid overflow-hidden">
            <div className="relative">
                <img
                    className="image bg-zinc-500 rounded-sm h-[40vh] w-full object-cover object-[0%_28%]"
                    src={image}
                />
                <div>
                    <button
                        onClick={clickHandler}
                        className="like-button w-[30px] h-[30px] rounded-full absolute bg-white border border-rose-400 right-[12px] bottom-[-16px] grid place-items-center"
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
