/* eslint-disable react/prop-types */
import { Link,  } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyCycleCard = ({ cycle, setsData }) => {
    const { product_image, _id } = cycle;

    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/new/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                "Deleted!",
                                "Your Coffee has been deleted.",
                                "success"
                            );
                            setsData(_id);
                        }
                    })
                    .catch(error => console.error('Error deleting cycle:', error));
            }
        });
    }

    return (
        <div className="max-w-sm rounded-md shadow-md ">
            <img src={product_image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div>
                    <h3 className="text-2xl font-semibold ">
                        {cycle?.product_name}
                    </h3>
                    <div className='space-x-3 '>
                        <Link to={`/update/${cycle._id}`} >
                            <button className="bg-[#E3B577] hover:bg-[#ab8554] text-white btn  ">
                                Update
                            </button>
                        </Link>
                        <button
                            onClick={handleDelete}
                            className="btn mt-2 btn-secondary">Delete
                        </button>
                        <Link to={`/users/${_id}`} >
                            <button className="bg-[#8fcd62] hover:bg-[#429b42] text-white btn  ">
                                Veiw Details
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCycleCard;
