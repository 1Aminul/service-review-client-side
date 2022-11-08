import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const {name, photoURL, about} = useLoaderData()
    return (
        <div>
            {name}
        </div>
    );
};

export default Details;