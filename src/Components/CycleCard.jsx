/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const CycleCard = ({ cycle }) => {
    const {_id ,product_image,query_title,product_name,brand_name,date_posted,}= cycle;
    return (
        <div data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="w-full  rounded-md shadow-md bg-gray-50 text-gray-800">
            <div className="p-4  ">
                <img src={product_image} alt="" className="object-cover hover:scale-105 hover:duration-200 object-center w-full rounded-xl h-72 hover:delay-50" />
            </div>

            <div className="flex  flex-col justify-between p-6 space-y-4">
                <div className="space-y-6">
                    <h2 className="text-xl  font-bold tracking-wide">Cycle Name: {product_name}</h2>
                    <h2 className="text-lg  text-black">Cycle Brand :{brand_name}</h2>
                    {
                        cycle?.alternation_reason && <p className=" text-lg h-8 text-black">Alternation Reason : {cycle?.alternation_reason} </p>
                    }
                    
                    <p className=" text-lg  text-black">Date Posted : {date_posted} </p>
                    <p className=" text-lg h-8  text-black">Title : {query_title} </p>
                </div>

                <div className="mt-6">
                <Link to={`/cycle/${_id}`} type="button" className="flex  items-center justify-center  w-full p-3 font-semibold tracking-wide rounded-md bg-violet-600 text-gray-50">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default CycleCard;