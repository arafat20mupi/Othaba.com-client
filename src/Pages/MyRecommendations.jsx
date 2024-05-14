import { useContext, useEffect, useState, } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import MyRecommendTR from "./MyRecommendTR";
import RobotAnimation from "../Components/RobotAnimation";

const MyRecommendations = () => {

    const { user } = useContext(AuthContext);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://server-query.vercel.app/recommendations/${user.email}`, {credentials: 'include'})
            .then((res) => res.json())
            .then((data) => setData(data))
    }, [user.email])
    const handleDeleteCycle = (deletedCycleId) => {
        const remainingSpots = data.filter(cycle => cycle._id !== deletedCycleId);
        setData(remainingSpots);
    }
    return (
        <div>
            <div className="overflow-x-auto">
                {
                    data.length === 0 ? <RobotAnimation></RobotAnimation> : <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Recommended Product Name</th>
                                <th>Recommendation_Title</th>
                                <th>Recommendation Reason</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map(recommend => <MyRecommendTR
                                    key={recommend._id}
                                    recommend={recommend}
                                    setData={handleDeleteCycle}
                                ></MyRecommendTR>)
                            }

                        </tbody>

                    </table>
                }

            </div>
        </div>
    );
};

export default MyRecommendations;