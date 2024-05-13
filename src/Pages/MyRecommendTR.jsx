/* eslint-disable react/prop-types */

const MyRecommendTR = ({spot}) => {
    console.log(spot);
    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>

            </td>
            <td>

            </td>
            <td>

            </td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default MyRecommendTR;