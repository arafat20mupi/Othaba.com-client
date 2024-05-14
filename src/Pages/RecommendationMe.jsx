// import { useEffect, useState } from "react";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import RecomendationMeCard from "../Components/RecomendationMeCard";
import RobotAnimation from "../Components/RobotAnimation";

const RecommendationMe = () => {
    const { user, } = useContext(AuthContext)
    const data = useLoaderData()
    console.log(data);

    return (
        <div >
            {
                data.length === 0 ? <RobotAnimation></RobotAnimation> : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        data.filter(d => d?.userEmail === user?.email).map(re => <RecomendationMeCard key={re._id} re={re}></RecomendationMeCard>)
                    }
                </div>
            }

        </div>
    );
};

export default RecommendationMe;