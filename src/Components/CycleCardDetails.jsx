import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const CycleCardDetails = () => {
    const cycleData = useLoaderData()
    console.log(cycleData);
    const { _id: quaryId, product_image, query_title, product_name, alternation_reason, date_posted, email, name, recommendation_count } = cycleData;
    const { user } = useContext(AuthContext);
    console.log(user);
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = e.target;
        const Recommendation_Title = data.Recommendation_Title.value;
        const Recommended_Product_Image = data.Recommended_Product_Image.value;
        const Recommendation_reason = data.Recommendation_Reason.value;
        const Recommended_product_Name = data.Recommended_Product_Name.value;
        const Recommended_email = user.email;
        const Recommended_Name = user.displayName;
        const Current_Time_Stamp = new Date().toISOString();
        const RecommendationData = {
            Recommendation_Title,
            Recommended_Product_Image,
            Recommendation_reason,
            Recommended_product_Name,
            quaryId,
            query_title,
            product_name,
            name,
            email,
            Recommended_email,
            Recommended_Name,
            Current_Time_Stamp
        }
        fetch('http://localhost:5000/recommended', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(RecommendationData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success("Add A new Cycle Succesfully", {
                    position: "top-center",
                    autoClose: 1000
                });
            })

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
                    <p className=" text-lg font-bold ">
                        User Name: <span className="text-red-500 lg:ml-2  ">{user.displayName}</span>
                    </p>
                    <p className=" text-lg font-bold lg:ml-6 ">
                        User Email: <span className="text-red-500 lg:ml-2  ">{user.email}</span>
                    </p>
                </div>
                <div className="lg:flex lg:justify-between">
                    <p className=" text-lg font-bold">
                        <span className="font-bold">Product Name:</span> <span className="text-red-500  ml-2 ">{product_name}</span>

                    </p>
                    <p className="  text-lg font-bold lg:ml-6 ">
                        Brand Name: <span className="text-red-500 ml-2  ">{cycleData?.brand_name}</span>
                    </p>
                </div>
                <div className="lg:flex lg:justify-between">
                    <p className=" text-lg font-bold">
                        Alternation Reason: <span className="text-red-500 ml-2  lg:mt-0 mt-2">{alternation_reason}</span>
                    </p>
                    <p className=" text-lg font-bold lg:ml-6 ">
                        Date Posted: <span className="text-red-500 ml-2  ">{date_posted}</span>
                    </p>
                </div>
                <p className=" text-lg font-bold ">
                    Recommendation Count: <span className="text-red-500 ml-2  ">{recommendation_count}</span>
                </p>

            </div>
            <div className="flex flex-col lg:justify-center space-y-2 p-6  rounded-sm lg:max-w-md xl:max-w-lg ">
                <p
                    className="lg:my-3 mt-2 text-2xl ">
                    <span className="font-bold">Query Title:</span> <span className=" text-red-500 ml-2  ">{query_title} </span>

                </p>
                <form onSubmit={handleSubmit} className="container   p-8 mx-auto space-y-6 rounded-md shadow bg-gray-200">
                    <h2 className="text-3xl text-center">Recommendation</h2>
                    <div className="w-full">
                        <label >Recommendation Title</label>
                        <input type="text" name="Recommendation_Title" placeholder="Recommendation Title" required className="p-2 w-full rounded focus:outline-none focus:ring focus:ring-opacity-25   " />
                    </div>
                    <div className="w-full">
                        <label >Recommended product Name</label>
                        <input type="text" name="Recommended_product_Name" placeholder="Recommended product Name" required className="p-2 w-full rounded focus:outline-none focus:ring focus:ring-opacity-25   " />
                    </div>
                    <div className="w-full">
                        <label >Recommended Product Image</label>
                        <input type="text" name="Recommended_Product_Image" placeholder="Recommended Product Image url" required className="p-2 w-full rounded focus:outline-none focus:ring focus:ring-opacity-25   " />
                    </div>
                    <div className="w-full">
                        <label >Recommendation reason</label>
                        <input type="text" name="Recommendation_reason" placeholder="Recommendation reason" required className="p-2 w-full rounded focus:outline-none focus:ring focus:ring-opacity-25   " />
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
