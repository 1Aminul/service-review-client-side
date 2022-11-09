import React from 'react';
import image2 from '../../../../images/dentist2.jpg'
import image3 from '../../../../images/dentist3.jpg'

const OtherSection = () => {
    return (
        <div>
            <div className="hero bg-gray-800 my-5">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={image2} className="w-1/2 rounded-lg shadow-2xl" alt=''/>
                    <div className='text-white'>
                    <h1 className="text-3xl font-bold">A Better Quality Of Life</h1>
                    <p className="py-6 text-justify">he psychological and physical aspects of missing teeth can dramatically affect your daily life. <br />  Missing teeth make it more difficult to bite, chew and break down your food. Patients who are missing all or most of their teeth face are often forced to limit the types of foods they eat which may very well affect their overall nutrition and general  health. <br />  Psychologically, patients with missing teeth may avoid certain social situations or avoid smiling in person and in photos. Missing teeth in certain areas of the mouth can also cause speech impediments and patients may feel self conscious when trying to pronounce certain words. <br />  Therefore there are many good reasons to consider replacing your missing teeth. If your are missing teeth, speak to your dentist to inform you of potential problems that may develop and solutions to prevent further problems, some of which you can read about below:</p>
                    
                    </div>
                </div>
            </div>

            <div className="hero bg-gray-800 my-5">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={image3} className="w-1/2 rounded-lg shadow-2xl" alt=''/>
                    <div className='text-white'>
                    <h1 className="text-3xl font-bold">Advantages of Replacing Natural Teeth</h1>
                    <p className="py-6 text-justify">Teeth are replaced most often in order to restore your ability to eat, chew and speak. This is the core function of the teeth and many patients find replacement greatly beneficial. They can eat the foods they want again without worry or restriction. <br />  Likewise, replacing natural teeth also helps to restore your self confidence. You will no longer feel like you have to hide your smile. It can also restore your ability to speak without impediments. The restorative benefits that come with tooth replacement are remarkable and they can greatly improve your quality of life. </p>
                    
                    </div>
                </div>
            </div>


        </div>
    );
};

export default OtherSection;