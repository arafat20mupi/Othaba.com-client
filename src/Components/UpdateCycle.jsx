import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCycle = () => {
    const update= useLoaderData();
    console.log(update);

    const handleUpdate = async (e) => {
        e.preventDefault();
        const data = e.target;
        const product_name = data.product_name.value;
        const newTouristsData = {
            product_name
        }
        try {
            const response = await fetch(`http://localhost:5000/user/${update._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newTouristsData)
            });

            if (!response.ok) {
                throw new Error('Failed to Update coffee');

            }

            Swal.fire({
                title: 'Success!',
                text: 'Coffee Updated successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
            });

        } catch (error) {
            console.error('Error:', error);
            Swal.fire({
                title: 'Error!',
                text: 'Something went wrong. Please try again later.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    };
    return (
        <div className="container mx-auto">
            <div>
                <h1 className="text-center mt-8 text-4xl font-bold">Update Tourists Spot</h1>
            </div>
            <section className="p-6 ">
                <form onSubmit={handleUpdate} className="container w-full max-w-4xl p-8 mx-auto space-y-6 rounded-md shadow bg-gray-200">
                    <div>
                        <div className="w-full">
                            <label >Cycle Name</label>
                            <input type="text" defaultValue={update.product_name} name="product_name" placeholder="Your Cycle Name" required className="p-2 w-full rounded focus:outline-none focus:ring focus:ring-opacity-25   " />
                        </div>
                    </div>


                    <div className="modal-action justify-center">
                        <button type="submit" className=" bg-gray-800  rounded p-2 mt-4 hover:bg-gray-700 transition duration-300 ease-in-out focus:outline-none focus:ring   text-white">
                            Update Tourists Spot
                        </button>
                        <Link to={'/myCycle'} type="button" className=" bg-gray-800 text-white rounded p-2 mt-4 hover:bg-gray-700 transition duration-300 ease-in-out focus:outline-none focus:ring ">
                            Back To My Cycle List
                        </Link>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default UpdateCycle;