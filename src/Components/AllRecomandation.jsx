import { useLoaderData } from "react-router-dom";
import RecomandationCard from "./RecomandationCard";
import RobotAnimation from "./RobotAnimation";

const AllRecomandation = () => {
    const allRecomands = useLoaderData();
    console.log(allRecomands);
    return (
        <div>
            {
                allRecomands.length === 0 ? <RobotAnimation></RobotAnimation> : <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                    {
                        allRecomands.map(recomand => <RecomandationCard key={recomand._id} recomand={recomand}></RecomandationCard>)
                    }
                </div>
            }
        </div>
    );
};

export default AllRecomandation;