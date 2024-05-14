// MyCycle.jsx
import { NavLink,} from "react-router-dom";
import MyCycleCard from "../Components/MyCycleCard";
import { useState, useEffect, useContext } from "react";
import RobotAnimation from "../Components/RobotAnimation";
import { AuthContext } from "../AuthProvider/AuthProvider";

const MyCycle = () => {
    const { user } = useContext(AuthContext);
    const [data, setsData] = useState([]);

    useEffect(() => {
        fetch(`https://server-query.vercel.app/new/${user.email}`, {credentials: 'include'})
            .then((res) => res.json())
            .then((data) => setsData(data))
    }, [user?.email])

    const handleDeleteCycle = (deletedCycleId) => {
        const remainingSpots = data.filter(cycle => cycle._id !== deletedCycleId);
        setsData(remainingSpots);
    }

    return (
        <div>
            <div>
                <h1 className="text-3xl font-semibold leading-tight text-center my-6">My Cycle</h1>
                {
                    data.length === 0 ?
                        <div>
                            <RobotAnimation></RobotAnimation>
                        </div>
                        : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            {
                                data.map(cycle => (
                                    <MyCycleCard
                                        key={cycle._id}
                                        cycle={cycle}
                                        data={data}
                                        setsData={handleDeleteCycle}
                                    />
                                ))
                            }
                        </div>
                }

            </div>
            <section className="py-6 mt-5 shadow-2xl rounded-lg  ">
                <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:flex-row lg:justify-between">
                    <h1 className="text-3xl font-semibold leading-tight text-center lg:text-left">Add More Queries</h1>
                    <NavLink to={"/addCycle"} className="inline-flex flex-nowrap items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-blue-600 text-white">
                        Add Queries
                    </NavLink>
                </div>
            </section>
        </div>
    );
};

export default MyCycle;
