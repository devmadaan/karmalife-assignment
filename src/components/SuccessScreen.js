import React from 'react';
import logo from '../assets/images/karma_favicon.png';
import successImg from '../assets/images/Success.svg'
import { Link } from 'react-router-dom';
import Header from '../subComponents/Header';
const SuccessScreen = () => {
  return (
    <div className='font-karma'>

      <Header linkUrl={"/"} />
      <div className='px-[16px] text-center min-h-[calc(100vh-60px)] flex flex-col justify-center items-center'>
        <img src={successImg} className='mx-auto' alt=''></img>
        <h2 className='text-[24px] font-[700] mt-[24px] text-[#333333]'>Congratulations!</h2>
        <p className='text-sm text-[#101010] mt-[12px] mb-[120px]'>Your Bank Details are Verified </p>
      </div>



    </div>
  );
};

export default SuccessScreen;
