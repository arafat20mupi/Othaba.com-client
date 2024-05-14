import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const CycleCardDetails = () => {
    const cycleData = useLoaderData();
    const { product_image, query_title, product_name, boycotting_reason_details, date_posted, recommendation_count } = cycleData;
    const { user } = useContext(AuthContext);
    const [recommendation, setRecommendation] = useState({
        Recommendation_Title: "",
        Recommended_Product_Name: "",
        Recommended_Product_Image: "",
        Recommendation_Reason: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRecommendation({ ...recommendation, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const RecommendationData = {
            ...recommendation,
            quaryId: cycleData._id,
            QueryTitle: cycleData.query_title,
            productName: cycleData.product_name,
            userEmail: cycleData.email,
            userName: cycleData.name,
            Recommender_Email: user.email,
            Recommender_Name: user.displayName,
            Current_Time_Stamp: new Date().toISOString()
        };

        try {
            const response = await fetch('http://localhost:5000/recommended', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(RecommendationData)
            });
            if (response.ok) {
                const data = await response.json();
                // Update recommendation_count in cycleData
                cycleData.recommendation_count = data.recommendation_count;

                // Show success toast
                toast.success("Recommendation added successfully", {
                    position: "top-center",
                    autoClose: 2000
                });
            } else {
                throw new Error('Failed to add recommendation');
            }
        } catch (error) {
            console.error('Error adding recommendation:', error);
            toast.error("Failed to add recommendation", {
                position: "top-center",
                autoClose: 2000
            });
        }
    };


    return (
        <div className="container flex flex-col justify-center p-6 mx-auto  lg:flex-row lg:justify-between">
            <div className="lg:flex flex-col text-start   w-full ">
                <img data-aos="zoom-in"
                    data-aos-delay="200"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    src={product_image} alt="" className=" flex  h-96 w-full md:px-20 rounded-lg justify-center items-center" />
                <div className="lg:flex lg:justify-between">
                    <p className=" text-lg font-medium ">
                        User Name: <span className="text-[#17E3D0] lg:ml-2  ">{user.displayName}</span>
                    </p>
                    <p className=" text-lg font-medium lg:ml-6 ">
                        User Email: <span className="text-[#17E3D0] lg:ml-2  ">{user.email}</span>
                    </p>
                </div>
                <div className="lg:flex lg:justify-between">
                    <p className=" text-lg font-medium">
                        <span className="font-bold">Product Name:</span> <span className="text-[#17E3D0]  ml-2 ">{product_name}</span>

                    </p>
                    <p className="  text-lg font-medium lg:ml-6 ">
                        Brand Name: <span className="text-[#17E3D0] ml-2  ">{cycleData?.brand_name}</span>
                    </p>
                </div>
                <div className="lg:flex lg:justify-between">
                    <p className=" text-lg font-medium">
                    Boycotting reason details: <span className="text-[#17E3D0] ml-2  lg:mt-0 mt-2">{boycotting_reason_details}</span>
                    </p>
                    <p className=" text-lg font-medium lg:ml-6 ">
                        Date Posted: <span className="text-[#17E3D0] ml-2  ">{date_posted}</span>
                    </p>
                </div>
                <p className=" text-lg font-medium ">
                    Recommendation Count: <span className="text-[#17E3D0] ml-2  ">{recommendation_count}</span>
                </p>
                <div className="mt-6">
                    <Link to={`/recomendations/${cycleData._id}`} type="button" className="flex  items-center justify-center  w-full p-3 font-semibold tracking-wide rounded-md bg-violet-600  hover:bg-violet-800 text-gray-50">View All Recomendation</Link>
                </div>

            </div>
            <div className="flex flex-col lg:justify-center space-y-2 p-6  rounded-sm lg:max-w-md xl:max-w-lg ">
                <p
                    className="lg:my-3 mt-2 text-2xl ">
                    <span className="font-bold">Query Title:</span> <span className=" text-[#17E3D0] ml-2  ">{query_title} </span>

                </p>
                <form onSubmit={handleSubmit} className="container p-8 mx-auto space-y-6 rounded-md shadow bg-gray-200">
                    <h2 className="text-2xl text-center">Add Recommendation</h2>
                    <div className="w-full">
                        <label>Recommendation Title</label>
                        <input type="text" name="Recommendation_Title" value={recommendation.Recommendation_Title} onChange={handleChange} placeholder="Recommendation Title" required className="p-2 w-full rounded focus:outline-none focus:ring focus:ring-opacity-25" />
                    </div>
                    <div className="w-full">
                        <label>Recommended Product Name</label>
                        <input type="text" name="Recommended_Product_Name" value={recommendation.Recommended_Product_Name} onChange={handleChange} placeholder="Recommended Product Name" required className="p-2 w-full rounded focus:outline-none focus:ring focus:ring-opacity-25" />
                    </div>
                    <div className="w-full">
                        <label>Recommended Product Image</label>
                        <input type="text" name="Recommended_Product_Image" value={recommendation.Recommended_Product_Image} onChange={handleChange} placeholder="Recommended Product Image URL" required className="p-2 w-full rounded focus:outline-none focus:ring focus:ring-opacity-25" />
                    </div>
                    <div className="w-full">
                        <label>Recommendation Reason</label>
                        <input type="text" name="Recommendation_Reason" value={recommendation.Recommendation_Reason} onChange={handleChange} placeholder="Recommendation Reason" required className="p-2 w-full rounded focus:outline-none focus:ring focus:ring-opacity-25" />
                    </div>
                    <button type="submit" className="w-full bg-gray-800 text-white rounded p-2 mt-4 hover:bg-gray-700 transition duration-300 ease-in-out focus:outline-none focus:ring focus:ring-violet-600 dark:text-white">
                        Add Recommendation
                    </button>
                </form>
            </div>

        </div>
    );
};

export default CycleCardDetails;
