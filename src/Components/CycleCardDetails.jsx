import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { RxCross1 } from "react-icons/rx";
import { imageUpload } from "../Utility/index";

const CycleCardDetails = () => {
    const cycleData = useLoaderData();
    const { product_image, brand_name, product_name, date_posted, recommendation_count } = cycleData;
    const { user } = useContext(AuthContext);

    const [recommendation, setRecommendation] = useState({
        Recommendation_Title: "",
        Recommended_Product_Name: "",
        Recommended_Product_Image: "",
        Recommendation_Reason: ""
    });

    // Image upload handler, used only when an image file is selected
    const handleImageUpload = async (file) => {
        try {
            const url = await imageUpload(file);
            setRecommendation({ ...recommendation, Recommended_Product_Image: url });
        } catch (error) {
            toast.error("Image upload failed");
            console.error("Image upload error:", error);
            return
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRecommendation({ ...recommendation, [name]: value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            handleImageUpload(file);
        }
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
            const response = await fetch('https://server-query.vercel.app/recommended', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(RecommendationData)
            });
            if (response.ok) {
                const data = await response.json();
                cycleData.recommendation_count = data.recommendation_count;
                toast.success("Recommendation added successfully", {
                    position: "top-center",
                    autoClose: 2000
                });
                setisModalOpen(false);
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

    const [isModalOpen, setisModalOpen] = useState(false);

    return (
        <section className="dark:bg-gray-100 dark:text-gray-800">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img src={product_image} alt="Product" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                </div>
                <div className="flex flex-col justify-start p-6 text-start rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-2xl font-bold leading-none sm:text-4xl">Product Name: 
                        <span className="dark:text-violet-600"> {product_name}</span>
                    </h1>
                    <div className="flex gap-10 my-10">
                        <div>
                            <p><span className="font-bold">Boycotting reason details:</span> {recommendation_count}</p>
                            <p><span className="font-bold">Recommendation Count:</span> 34</p>
                        </div>
                        <div>
                            <p className="text-slate-800"><span className="font-bold text-black">Brand Name:</span> {brand_name}</p>
                            <p><span className="font-bold">Date Posted:</span> {date_posted}</p>
                        </div>
                    </div>
                    <Link to={`/recomendations/${cycleData._id}`} className="px-4 py-2 text-center bg-[#3B9DF8] text-[#fff] rounded ">View All Recommendations</Link>
                    <div className="mt-4 flex w-full md:items-center md:gap-5 md:justify-center">
                        <button className="px-4 w-full py-2 bg-[#3B9DF8] text-[#fff] rounded" onClick={() => setisModalOpen(true)}>Add Recommendation</button>
                        <div className={`${isModalOpen ? "visible" : "invisible"} w-full h-screen fixed top-0 left-0 z-50 bg-[#0000002a] transition-all duration-300 flex items-center justify-center`}>
                            <div className={`${isModalOpen ? "scale-[1] opacity-100" : "scale-[0] opacity-0"} w-[90%] md:w-[80%] lg:w-[60%] bg-[#fff] rounded-lg transition-all duration-300 mx-auto mt-8`}>
                                <div className="w-full flex items-end p-4 justify-between border-b border-[#d1d1d1]">
                                    <h1 className="text-[1.5rem] font-bold">Add Your Recommendation Product</h1>
                                    <RxCross1 className="p-2 text-[2.5rem] hover:bg-[#e7e7e7] rounded-full transition-all duration-300 cursor-pointer" onClick={() => setisModalOpen(false)} />
                                </div>
                                <form onSubmit={handleSubmit} className='border-2 p-5 flex flex-col gap-5 bg-white shadow-lg rounded-md'>
                                    <div className='flex flex-col'>
                                        <label htmlFor="Recommendation_Title" className='font-semibold font-sans mb-2'>Recommendation Title</label>
                                        <input type="text" name="Recommendation_Title" value={recommendation.Recommendation_Title} onChange={handleChange} placeholder="Recommendation Title" required className='bg-slate-100 p-2 rounded-md' />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label htmlFor="Recommended_Product_Name" className='font-semibold font-sans mb-2'>Recommended Product Name</label>
                                        <input type="text" name="Recommended_Product_Name" value={recommendation.Recommended_Product_Name} onChange={handleChange} placeholder="Recommended Product Name" required className='bg-slate-100 p-2 rounded-md' />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label htmlFor="Recommended_Product_Image" className='font-semibold font-sans mb-2'>Recommended Product Image</label>
                                        <input type="file" name="Recommended_Product_Image" onChange={handleFileChange} required className='bg-slate-100 p-2 rounded-md focus:outline-none' />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label htmlFor="Recommendation_Reason" className='font-semibold font-sans mb-2'>Recommendation Reason</label>
                                        <input type="text" name="Recommendation_Reason" value={recommendation.Recommendation_Reason} onChange={handleChange} placeholder="Recommendation Reason" required className='bg-slate-100 p-2 rounded-md' />
                                    </div>
                                    <div className="flex w-full items-center gap-4 p-4">
                                        <button type="submit" className="py-2 px-4 w-full rounded-md outline-none bg-[#3B9DF8] text-[#fff]">Add Recommendation</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CycleCardDetails;
