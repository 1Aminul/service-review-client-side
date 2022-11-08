import React from 'react';
import Title from '../../../useTitle';
import LimitService from '../LimitService/LimitService.';

const Home = () => {
    Title('home')
    return (
        <div className='w-4/5 mx-auto'>
            <LimitService></LimitService>
        </div>
    );
};

export default Home;