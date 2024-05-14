import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { AuthContext } from "../AuthProvider/AuthProvider";

const AddCycle = () => {
    const { user } = useContext(AuthContext);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = e.target;
        const name = data.name.value;
        const email = data.email.value;
        const product_image = data.image.value;
        const product_name = data.cycleName.value;
        const brand_name = data.cycleBrand.value;
        const boycotting_reason_details = data.Boycot.value;
        const query_title = data.Title.value;
        const userImage = user.photoURL;
        const date_posted = new Date().toLocaleString();
        const recommendation_count = 0
        const newTourists = {
            name, email, product_image, product_name, brand_name, boycotting_reason_details, query_title, userImage, date_posted, recommendation_count
        }
        fetch('https://server-query.vercel.app/new', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTourists)
        })
            .then(res => res.json())
            .then(() => {
                toast.success("Add A new Cycle Succesfully", {
                    position: "top-center",
                    autoClose: 1000
                });
            })
    }
    return (
        <div className="container mx-auto">
            <Helmet>
                <title>Add Queries</title>
            </Helmet>
            <div>
                <h1 className="text-center text-4xl font-bold">Add Queries </h1>
            </div>
            <section className="p-6 dark:text-gray-800">
                <form onSubmit={handleSubmit} className="container w-full max-w-4xl p-8 mx-auto space-y-6 rounded-md shadow bg-gray-200">
                    <div>
                        <div className="flex justify-between">
                            <div className="w-full ">
                                <label >Name</label>
                                <input type="text" id="userName" name="name" disabled defaultValue={user?.displayName} placeholder="Your Name" required className="p-2 w-full rounded focus:outline-none focus:ring bg-slate-400 focus:ring-opacity-25 focus:ring-violet-600 " />
                            </div>
                            <div className="w-full ml-2">
                                <label >Email</label>
                                <input type="text" name="email" defaultValue={user?.email} disabled placeholder="Your name" required className="p-2 w-full rounded bg-slate-400 focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-600 " />
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className="w-full ">
                                <label >Queries Name</label>
                                <input type="text" name="cycleName" placeholder="Your Queries Name" required className="p-2 w-full rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-600 " />
                            </div>
                            <div className="w-full ml-2">
                                <label >Queries Brand</label>
                                <input name="cycleBrand" type="text" placeholder="Your Queries Brand " required className="p-2 w-full rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-600 " />
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className="w-full ">
                                <label > Boycotting Reason Details</label>
                                <input type="text" name="Boycot" placeholder="Your Boycotting Reason Details" required className="p-2 w-full rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-600 " />
                            </div>
                            <div className="w-full ml-2">
                                <label > Queries Title</label>
                                <input type="text" name="Title" placeholder="Your  Queries Title" required className="p-2 w-full rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-600 " />
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className="w-full ">
                                <label >Queries Image</label>
                                <input type="text" name="image" placeholder="Your Queries Image url" required className="p-2 w-full rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-600 " />
                            </div>
                        </div>
                    </div>

                    <button type="submit" className="w-full bg-gray-800 text-white rounded p-2 mt-4 hover:bg-gray-700 transition duration-300 ease-in-out focus:outline-none focus:ring focus:ring-violet-600 dark:text-white">
                        Add Queries
                    </button>
                </form>
            </section>
        </div>
    );
};

export default AddCycle;