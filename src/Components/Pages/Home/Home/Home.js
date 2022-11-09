import React from 'react';
import Title from '../../../useTitle';
import Banner from '../Banner/Banner';
import LimitService from '../LimitService/LimitService.';
import OtherSection from '../OtherSection/OtherSection';

const Home = () => {
    Title('home')
    return (
        <div className='w-4/5 mx-auto'>
            <Banner></Banner>
            <OtherSection></OtherSection>
            <LimitService></LimitService>
        </div>
    );
};

export default Home;