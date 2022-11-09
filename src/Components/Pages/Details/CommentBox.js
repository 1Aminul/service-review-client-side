import React from 'react';

const CommentBox = ({comment}) => {
    const {photoURL, name, review, time} = comment;
    return (
        <div className='border border-primary rounded px-3 py-3 my-5 '>
            <div className='flex justify-start items-center'>
                <div className="avatar">
                    <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={photoURL} alt=''/>
                    </div>  
                </div>
                <div className='ml-5'>
                    <p className='text-xl mr-12'>{name}</p>
                    <p className='text-sm'>{time}</p>
                </div> 
            </div>
            <p className='mt-5 text-xl'>{review}</p>
        </div>
    );
};

export default CommentBox;