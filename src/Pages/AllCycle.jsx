import { useLoaderData } from "react-router-dom";
import CycleCard from "../Components/CycleCard";

const AllCycle = () => {
    const Cycles = useLoaderData()
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    Cycles.map(cycle => <CycleCard key={cycle._id} cycle={cycle}> </CycleCard>)
                }
            </div>
        </div>
    );
};

export default AllCycle;