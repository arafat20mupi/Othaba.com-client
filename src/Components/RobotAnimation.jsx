import Lottie from "lottie-react";
import animation from "../Robot.json"
import {  NavLink } from "react-router-dom";
const RobotAnimation = () => {
    return (
        <div className=" flex flex-col items-center justify-center text-center">
            <h3 className="text-3xl">Tourist Spot Not Added</h3>
            <Lottie 
            loop={true} 
            animationData={animation}
            style={{ width: '450px', color: 'red' }} 
            />
            <NavLink className="btn bg-purple-600 mt-3" to={'/addSpot'}>Add Tourist Spot</NavLink>
       </div>
    );
};

export default RobotAnimation;