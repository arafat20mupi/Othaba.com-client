/* eslint-disable react/prop-types */

const RecomendationMeCard = ({ re }) => {
    const { Recommended_Product_Name, Recommendation_Title, Recommended_Product_Image, Recommendation_Reason, } = re;
    return (
        <div>
            <div data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                className="w-full  rounded-md shadow-md bg-gray-50 text-gray-800">
                <div className="p-4  ">
                    <img src={Recommended_Product_Image} alt="" className="object-cover hover:scale-105 hover:duration-200 object-center w-full rounded-xl h-72 hover:delay-50" />
                </div>

                <div className="flex  flex-col justify-between p-6 space-y-4">
                    <div className="space-y-6">
                        <h2 className="text-xl  font-bold tracking-wide">Recommended Product Name: {Recommended_Product_Name}</h2>
                        <h2 className="text-lg  text-black">Recommendation Title :{Recommendation_Title}</h2>
                        <p className=" text-lg  text-black">Recommendation Reason : {Recommendation_Reason} </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecomendationMeCard;