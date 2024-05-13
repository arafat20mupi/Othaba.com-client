import { useContext, useEffect, useState, } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import MyRecommendTR from "./MyRecommendTR";

const MyRecommendations = () => {

    const { user } = useContext(AuthContext);
    const [spots, setsSpot] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/recommendations/${user.email}`)
            .then((res) => res.json())
            .then((data) => setsSpot(data))
    }, [user.email])
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            spots.map(spot => <MyRecommendTR key={spot._id} spot={spot}></MyRecommendTR>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyRecommendations;