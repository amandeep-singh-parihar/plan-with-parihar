import React, { useState } from "react";
import Card from "./Card";

function Tours({ tours, removeTour }) {
    const [add, setAdd] = useState([]);

    return (
        <div>
            <div className="w-full flex items-center justify-center mt-12 mb-12">
                <h2 className="text-4xl font-bold border-4 border-blue-800 border-dashed rounded-xl w-fit px-12 py-2 capitalize">
                    Plan with Parihar
                </h2>
            </div>
            <div className="flex justify-center flex-wrap gap-4 px-36 mb-12">
                {tours.map((tour) => {
                    return (
                        <Card
                            key={tour.id}
                            {...tour}
                            tour={tour}
                            removeTour={removeTour}
                            add={add}
                            setAdd={setAdd}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Tours;
