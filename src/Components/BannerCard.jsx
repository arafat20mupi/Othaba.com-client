/* eslint-disable react/prop-types */

const BannerCard = ({ data }) => {
    const { product_image,price,  product_name, brand_name, } = data;
    return (
        <div data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className="w-full p-3  rounded-md shadow-md bg-gray-50 text-gray-800">
        <div >
            <div className='p-3 '>
                <img className='w-full h-72 rounded-md hover:scale-105 transition-all duration-500' src={product_image} alt="photo" />
            </div>
            <div className='flex flex-col gap-3 ml-5'>
                <p className='font-bold'>Product Name: {product_name} </p>
                <p>Brand Name:  {brand_name} </p>
                <span>Price: { price || 500 } Tk</span>
            </div>
        </div>
    </div>
    );
};

export default BannerCard;