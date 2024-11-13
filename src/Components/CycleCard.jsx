/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const CycleCard = ({ cycle }) => {
    const { _id, product_image, price, product_name, brand_name, } = cycle;
    return (
        <div data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="w-full p-3 rounded-md shadow-md bg-gray-50 text-gray-800">
            <div className='p-3 '>
                <img className='w-full h-72 rounded-md hover:scale-105 transition-all duration-500' src={product_image} alt="photo" />
            </div>
            <div className='flex flex-col p-3 gap-3 ml-5'>
                <p className='font-bold'>Product Name: {product_name} </p>
                <p>Brand Name:  {brand_name} </p>
                <span>Price: {price} </span>
            </div>
            <div className='flex justify-center mb-4 '>
                <div className=' flex justify-center h-12 w-full cursor-pointer mx-2 transition   text-white font-medium bg-primary p-3 rounded-md '>
                    <Link to={`/users/${_id}`}>View Ditails</Link>
                </div>
            </div>
        </div>
    );
};

export default CycleCard;