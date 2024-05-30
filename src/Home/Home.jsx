import PrivacyPolicy from "../Pages/PrivacyPolicy";
import Banner from "./Banner";
import Pricing from "./Pricing";
import Slider from "./Slider";
import Teams from "./Teams";

const Home = () => {
    return (
        <div className="container mx-auto">
            <div className="lg:my-12 my-6 ">
                <Slider></Slider>
            </div>
            <div className="lg:my-12 my-6 ">
                <Banner></Banner>
            </div>
            <div className="lg:my-12 my-6 ">
                <Teams></Teams>
            </div>
            <div className="lg:my-12 my-6 ">
                <Pricing></Pricing>
            </div>
            <div className="lg:my-12 my-6 ">
               <PrivacyPolicy></PrivacyPolicy>
            </div>
        </div>
    );
};

export default Home;