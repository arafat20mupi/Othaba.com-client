// MyCycle.jsx
import { NavLink, useLoaderData } from "react-router-dom";
import MyCycleCard from "../Components/MyCycleCard";
import { useState, useEffect } from "react";

const MyCycle = () => {
    const data = useLoaderData();
    const [spots, setsSpot] = useState([]);

    useEffect(() => {
        setsSpot(data);
    }, [data]);

    const handleDeleteCycle = (deletedCycleId) => {
        const remainingSpots = spots.filter(cycle => cycle._id !== deletedCycleId);
        setsSpot(remainingSpots);
    }

    return (
        <div>
            <div>
                <h1 className="text-3xl font-semibold leading-tight text-center my-6">My Cycle</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {
                        spots.map(cycle => (
                            <MyCycleCard
                                key={cycle._id}
                                cycle={cycle}
                                spots={spots}
                                setsSpot={handleDeleteCycle}
                            />
                        ))
                    }
                </div>
            </div>
            <section className="py-6 mt-5 shadow-2xl rounded-lg  ">
                <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:flex-row lg:justify-between">
                    <h1 className="text-3xl font-semibold leading-tight text-center lg:text-left">Add More Cycle</h1>
                    <NavLink to={"/addCycle"} className="inline-flex flex-nowrap items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-blue-600 text-white">
                        Add Cycle
                    </NavLink>
                </div>
            </section>
        </div>
    );
};

export default MyCycle;
