import React from 'react';

const MyReviewRow = ({comment}) => {
    const {name, photoURL, review, email, serviceName, time }= comment
    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full ">
                
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Review</th>
                    <th>Service Name</th>
                    <th>Operation</th>
                </tr>
                </thead>
                <tbody>
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
                    {review}
                    <br/>
                    <span className="badge badge-ghost badge-sm">{time}</span>
                    </td>
                    <td>{serviceName}</td>
                    <th>
                    <button className="btn btn-gray btn-xs">Edit</button>
                    <button className="btn btn-gray btn-xs ml-2">Delete</button>
                    </th>
                </tr>
                </tbody>
            
            
                
            </table>
        </div>
    );
};

export default MyReviewRow;