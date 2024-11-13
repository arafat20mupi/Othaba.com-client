import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { imageUpload } from "../Utility/index";

const AddCycle = () => {
    const { user } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = e.target;
        const name = data.name.value;
        const email = data.email.value;
        const product_name = data.cycleName.value;
        const brand_name = data.cycleBrand.value;
        const boycotting_reason_details = data.Boycot.value;
        const query_title = data.Title.value;
        const userImage = user.photoURL;
        const date_posted = new Date().toLocaleString();
        const recommendation_count = 0;
        const price = data.price.value;

        // Upload product image
        let product_image;
        try {
            const image = data.image.files[0];
            product_image = await imageUpload(image);
        } catch (error) {
            toast.error("Image upload failed. Please try again.");
            return; // Exit if image upload fails
        }

        // Create newTourists object
        const newTourists = {
            name,
            email,
            product_image,
            product_name,
            brand_name,
            boycotting_reason_details,
            query_title,
            userImage,
            date_posted,
            price,
            recommendation_count,
        };

        // Post data to server
        fetch('https://server-query.vercel.app/new', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTourists)
        })
            .then(res => res.json())
            .then(() => {
                toast.success("Added a new Product successfully!", {
                    position: "top-center",
                    autoClose: 1000
                });
            })
            .catch(() => {
                toast.error("Failed to add Product. Please try again.");
            });
    };

    return (
        <div className="container mx-auto">
            <Helmet>
                <title>Add Product</title>
            </Helmet>
            <div>
                <h1 className="text-center text-4xl font-bold">Add Product</h1>
            </div>
            <section className="p-6 dark:text-gray-800">
                <form onSubmit={handleSubmit} className="container w-full max-w-4xl p-8 mx-auto space-y-6 rounded-md shadow bg-white">
                    <div>
                        <div className="flex justify-between">
                            <div className="w-full">
                                <label className="text-xl font-bold my-2">Name</label>
                                <input type="text" name="name" disabled defaultValue={user?.displayName} required className="p-2 w-full rounded bg-slate-100" />
                            </div>
                            <div className="w-full ml-2">
                                <label className="text-xl font-bold my-2">Email</label>
                                <input type="text" name="email" defaultValue={user?.email} disabled required className="p-2 w-full rounded bg-slate-100" />
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className="w-full">
                                <label className="text-xl font-bold my-2">Product Name</label>
                                <input type="text" name="cycleName" placeholder="Your Product Name" required className="p-2 w-full rounded bg-slate-100" />
                            </div>
                            <div className="w-full ml-2">
                                <label className="text-xl font-bold my-2">Product Brand</label>
                                <input type="text" name="cycleBrand" placeholder="Your Product Brand" required className="p-2 w-full rounded bg-slate-100" />
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className="w-full">
                                <label className="text-xl font-bold my-2">Boycotting Reason Details</label>
                                <input type="text" name="Boycot" placeholder="Your Boycotting Reason Details" required className="p-2 w-full rounded bg-slate-100" />
                            </div>
                            <div className="w-full ml-2">
                                <label className="text-xl font-bold my-2">Product Title</label>
                                <input type="text" name="Title" placeholder="Your Product Title" required className="p-2 w-full rounded bg-slate-100" />
                            </div>
                        </div>
                        <div>

                            <div className="flex justify-between">
                                <div className="w-full">
                                    <label className="text-xl font-bold my-2">Product Image</label>
                                    <input type="file" name="image" required className=" p-2 w-full rounded bg-slate-100" />
                                </div>
                                <div className="w-full ml-2">
                                    <label className="text-xl font-bold my-2">Price</label>
                                    <input type="number" name="price" placeholder="Your Product Price" required className="p-2 w-full rounded bg-slate-100" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white rounded p-2 mt-4 transition duration-300 ease-in-out dark:text-white">
                        Add Product
                    </button>
                </form>
            </section>
        </div>
    );
};

export default AddCycle;
