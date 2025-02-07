import React, { useState } from "react";
import Tours from "./Components/Tours";
import data from "./Components/data";
import { toast } from "react-toastify";

function App() {
    const [tours, setTours] = useState(data);

    function removeTour(id) {
        const newTours = tours.filter((tour) => tour.id !== id);
        setTours(newTours);
    }

    function refreshHandler() {
        setTours(data);
        toast.info("Tours Refreshed");
    }

    if (tours.length === 0) {
        return (
            <div className="refresh flex items-center justify-center h-screen w-full flex-col">
                <h2 className="rounded-sm font-bold text-xl">No Tours Left</h2>
                <button
                    className="bg-zinc-400 px-6 rounded-lg font-bold mt-4"
                    onClick={refreshHandler}
                >
                    Refresh
                </button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#f4f5f6] flex flex-col ">
            <Tours tours={tours} removeTour={removeTour} />
        </div>
    );
}

export default App;
