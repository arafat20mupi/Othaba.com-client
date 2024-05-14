import { Link, useLoaderData } from "react-router-dom";
import CycleCard from "../Components/CycleCard";
import { useEffect, useState } from "react";
import { LuLayoutGrid } from "react-icons/lu";
import { HiOutlineBars3 } from "react-icons/hi2";

const AllCycle = () => {
    const Cycles = useLoaderData();
    const [sortOrder, setSortOrder] = useState("asc");
    const [viewMode, setViewMode] = useState("card");
    const [data, setData] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        fetch(`http://localhost:5173/users/some_user_id`) // Adjust the URL as needed.
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    const sortByDatePosted = (cycles, order) => {
        return cycles.slice().sort((a, b) => {
            const dateA = new Date(a.date_posted);
            const dateB = new Date(b.date_posted);
            return order === "asc" ? dateA - dateB : dateB - dateA;
        });
    };

    const handleSortOrderChange = (event) => {
        setSortOrder(event.target.value);
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const toggleViewMode = () => {
        setViewMode(viewMode === "card" ? "table" : "card");
    };

    const filteredCycles = Cycles.filter((cycle) =>
        cycle.product_name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const sortedCycles = sortByDatePosted(filteredCycles, sortOrder);

    return (
        <div>
            <div className="mb-4 flex justify-between items-center">
                <div className="flex items-center">
                    <label htmlFor="sort">Sort by Date Posted:</label>
                    <select
                        id="sort"
                        className="ml-2 p-2 border"
                        value={sortOrder}
                        onChange={handleSortOrderChange}
                    >
                        <option value="asc">Oldest to Newest</option>
                        <option value="desc">Newest to Oldest</option>
                    </select>
                </div>
                <div className="flex items-center">
                    <input
                        type="text"
                        placeholder="Search by Product Name"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        className="ml-4 p-2 border"
                    />
                    <button onClick={toggleViewMode} className="ml-4 btn bg-blue-500 text-white flex items-center">
                        {viewMode === "card" ? (

                            <>
                                <LuLayoutGrid className="mr-1" />
                                Card View
                            </>
                        ) : (
                            <>
                                <HiOutlineBars3 className="mr-1" />
                                Table View
                            </>
                        )}
                    </button>
                </div>
            </div>
            {viewMode === "card" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {sortedCycles.map((cycle) => (
                        <CycleCard key={cycle._id} cycle={cycle} data={data} />
                    ))}
                </div>
            ) : (
                <table className="w-full border-collapse">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b">Product Name</th>
                            <th className="py-2 px-4 border-b">Date Posted</th>
                            <th className="py-2 px-4 border-b">Query Title</th>
                            <th className="py-2 px-4 border-b">View Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedCycles.map((cycle) => (
                            <tr key={cycle._id}>
                                <td className="py-2 px-4 border-b">{cycle.product_name}</td>
                                <td className="py-2 px-4 border-b">{new Date(cycle.date_posted).toLocaleDateString()}</td>
                                <td className="py-2 px-4 border-b">{cycle.query_title}</td>
                                <td className="py-2 px-4 border-b">
                                    <Link to={`/users/${cycle._id}`} className="btn bg-blue-500 text-white">
                                        View Details
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default AllCycle;
