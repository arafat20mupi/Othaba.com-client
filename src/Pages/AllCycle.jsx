import { useLoaderData } from "react-router-dom";
import CycleCard from "../Components/CycleCard";
import { useState } from "react";

const AllCycle = () => {
    const Cycles = useLoaderData()
    const [sortOrder, setSortOrder] = useState("asc");

    const sortByDatePosted = (cycles, order) => {
        return cycles.slice().sort((a, b) => {
            const dateA = new Date(a.date_posted);
            const dateB = new Date(b.date_posted);
            return order === "asc" ? dateA - dateB : dateB - dateA;
        });
    };

    const toggleSortOrder = () => {
        setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    };

    const sortedCycles = sortByDatePosted(Cycles, sortOrder);

    return (
        <div>
            <div className="mb-4">
                <label htmlFor="sort">Sort by Date Posted:</label>
                <select
                    id="sort"
                    className="ml-2 p-2"
                    value={sortOrder}
                    onChange={toggleSortOrder}
                >
                    <option value="asc">Oldest to Newest</option>
                    <option value="desc">Newest to Oldest</option>
                </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    sortedCycles.map(cycle => <CycleCard key={cycle._id} cycle={cycle}> </CycleCard>)
                }
            </div>
        </div>
    );
};

export default AllCycle;