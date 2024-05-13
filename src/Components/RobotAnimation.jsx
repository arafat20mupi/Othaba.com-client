import Lottie from "lottie-react";
import animation from "../Robot.json"
const RobotAnimation = () => {
    return (
        <div className=" flex  flex-col items-center justify-center text-center">
            <h3 className="text-3xl">Not Found Data</h3>
            <Lottie 
            loop={true} 
            animationData={animation}
            style={{ width: '450px', color: 'red' }} 
            />
       </div>
    );
};

export default RobotAnimation;