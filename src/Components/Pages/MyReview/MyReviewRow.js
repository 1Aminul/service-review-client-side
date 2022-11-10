import React from 'react';
import { Link } from 'react-router-dom';

const MyReviewRow = ({comment,  deleteReview}) => {
    const {_id, name, photoURL, review, email, serviceName, time } = comment
    return (
        <tr>
            <td>
            <div className="flex items-center space-x-2">
                <div className="avatar">
                <div className="mask rounded-full w-12 h-12">
                    <img src={photoURL} alt="Avatar Tailwind CSS Component" />
                </div>
                </div>
                <div>
                <div className="font-bold">{name}</div>
                <div className="text-sm opacity-50">{email}</div>
                </div>
            </div>
            </td>
            <td>
            {review? review : 'no review'}
            <br/>
            <span className="badge badge-ghost badge-sm">{time}</span>
            </td>
            <td>{serviceName}</td>
            <th>
            <Link to={`/update/${_id}`}><button className="btn btn-gray btn-xs">Edit</button></Link>
            <button onClick={()=> deleteReview(_id)} className="btn btn-gray btn-xs ml-2">Delete</button>
            </th>
        </tr>
    );
};

export default MyReviewRow;