/* eslint-disable react/prop-types */

const BannerCard = ({ data }) => {
    const {  product_image, query_title, product_name, brand_name,  date_posted,  } = data;
    return (
        <div>
            <div data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                className="w-full  rounded-md shadow-xl bg-gray-50 text-gray-800">
                <div className="p-4  ">
                    <img src={product_image} alt="" className="object-cover hover:scale-105 hover:duration-200 object-center w-full rounded-xl h-72 hover:delay-50" />
                </div>

                <div className="flex flex-col justify-between p-6 space-y-4">
                    <div className="space-y-4">
                        <h2 className="text-xl  font-bold tracking-wide">Product Name: {product_name}</h2>
                        <h2 className="text-lg  text-black">Product Brand :{brand_name}</h2>
                        <p className=" text-lg text-black">Date Posted : {date_posted} </p>
                        <p className=" text-lg h-8 text-black">Title : {query_title} </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerCard;