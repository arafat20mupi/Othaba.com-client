/* eslint-disable react/prop-types */

import Swal from "sweetalert2";

const MyRecommendTR = ({ recommend, setData }) => {
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
                fetch(`https://server-query.vercel.app/recommended/${recommend._id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                "Deleted!",
                                "Your recommendation has been deleted.",
                                "success"
                            );
                            setData(recommend._id);
                        }
                    })
                    .catch(error => console.error('Error deleting recommendation:', error));
            }
        });
    };
    return (
        <tr>
            <td>
                {recommend.Recommended_Product_Name}
            </td>
            <td>
                {recommend.Recommendation_Title}
            </td>
            <td>
                {recommend.Recommendation_Reason}
            </td>
            <th>
                <button onClick={handleDelete} className="btn btn-secondary ">Delete</button>
            </th>
        </tr>
    );
};

export default MyRecommendTR;