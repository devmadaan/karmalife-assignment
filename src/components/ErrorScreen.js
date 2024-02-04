import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/karma_favicon.png';
import ErrorImg from '../assets/images/Error.svg'
import Header from '../subComponents/Header';

const ErrorScreen = () => {

return (
  <div>
    <Header linkUrl={"/"} />
    <div className='px-[16px] text-center min-h-[calc(100vh-60px)] flex flex-col justify-center items-center'>
      <img src={ErrorImg} className='mx-auto' alt=''></img>
      <h2 className='text-[24px] font-[700] mt-[24px] text-[#333333]'>Oh no!</h2>
      <p className='text-sm text-[#101010] mt-[12px] mb-[120px]'>Looks like there was a problem verifying your bank account.</p>
    </div>



  </div>
);
};

export default ErrorScreen;
