import React from 'react';
import RectangleImg from '../../assests/images/Rectangle 30.png';
import RectangleImg2 from '../../assests/images/Rectangle 32.png';
import RectangleImg3 from '../../assests/images/Rectangle 34.png';
function FeaturedWorkSection() {
  return (
    <div className='muiContainer third-section-featureWork'>
       <div className='flex flex-row gap-4 '>
         <div>
           <img src={RectangleImg} alt="" />
         </div>
         <div className='flex flex-col justify-between'>
            <h2 className='text-2xl text-dark font-bold '>Designing Dashboards</h2>
            <div className='flex justify-row  gap-4'>
                <h4 className='bg-blue-950 px-4  py-1  rounded-2xl  text-white font-bold text-sm'>2022</h4>
                <p className='text-xl'>Dashboard</p>
            </div>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
         </div>
         
       </div>
       <br />
       <hr />
       <br />
       <div className='flex flex-row gap-4 '>
         <div>
           <img src={RectangleImg2} alt="" />
         </div>
         <div className='flex flex-col justify-between'>
            <h2 className='text-2xl text-dark font-bold '>Vibrant Portraits of 2020</h2>
            <div className='flex justify-row  gap-4'>
                <h4 className='bg-blue-950 px-4  py-1  rounded-2xl  text-white font-bold text-sm'>2018</h4>
                <p className='text-xl'>Illustration</p>
            </div>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
         </div>
         
       </div>
       <br />
       <hr /><br />
       <div className='flex flex-row gap-4 '>
         <div>
           <img src={RectangleImg3} alt="" />
         </div>
         <div className='flex flex-col justify-between'>
            <h2 className='text-2xl text-dark font-bold '>36 Days of Malayalam type</h2>
            <div className='flex justify-row  gap-4'>
                <h4 className='bg-blue-950 px-4  py-1  rounded-2xl  text-white font-bold text-sm'>2018</h4>
                <p className='text-xl'>Typography</p>
            </div>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
         </div>   
       </div>
       <br />
       <hr />
    </div>
  )
}

export default FeaturedWorkSection
