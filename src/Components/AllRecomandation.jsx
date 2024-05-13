import { useLoaderData } from "react-router-dom";
import RecomandationCard from "./RecomandationCard";
import RobotAnimation from "./RobotAnimation";

const AllRecomandation = () => {
    const allRecomands = useLoaderData();
    console.log(allRecomands);
    return (
        <div>
            {
                allRecomands.length === 0 ? <RobotAnimation></RobotAnimation> : <div>
                    <h1 className="text-4xl text-center my-8">All Recomandations</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                        {
                            allRecomands.map(recomand => <RecomandationCard key={recomand._id} recomand={recomand}></RecomandationCard>)
                        }
                    </div>
                </div>
            }
        </div>
    );
};

export default AllRecomandation;