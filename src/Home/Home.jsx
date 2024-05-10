import Banner from "./Banner";
import Slider from "./Slider";

const Home = () => {
    return (
        <div className="container mx-auto">
            <div className="lg:my-12 my-6 ">
                <Slider></Slider>
            </div>
            <div className="lg:my-12 my-6 ">
                <Banner></Banner>
            </div>
        </div>
    );
};

export default Home;