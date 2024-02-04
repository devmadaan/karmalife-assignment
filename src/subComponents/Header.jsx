import React from 'react';
import { Link } from 'react-router-dom'; 
import logo from '../assets/images/karma_favicon.png';

const Header = ({ linkUrl }) => {
  return (
    <div className='font-karma'>
      <div className="font-karma p-[16px] bg-[#2f6852] flex items-center flex-row gap-[8px]">
        {linkUrl ? (
          <Link to={linkUrl}>
            <svg className='mr-[12px]' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.0189 20.0002C16.2108 20.0014 16.3987 19.9456 16.5588 19.8397C16.7189 19.7339 16.8439 19.5828 16.918 19.4058C16.992 19.2287 17.0118 19.0337 16.9748 18.8454C16.9377 18.6571 16.8455 18.484 16.7099 18.3482L10.3379 11.9752L16.7069 5.60922C16.7958 5.50332 16.8618 5.38013 16.9007 5.24742C16.9396 5.11472 16.9506 4.97538 16.9329 4.83823C16.9091 4.67031 16.8419 4.51149 16.738 4.37747C16.6341 4.24346 16.497 4.13887 16.3402 4.07404C16.1835 4.00921 16.0126 3.98639 15.8444 4.00781C15.6761 4.02924 15.5164 4.09419 15.3809 4.19623L8.2809 11.2902C8.10265 11.4737 8.00293 11.7194 8.00293 11.9752C8.00293 12.231 8.10265 12.4768 8.2809 12.6602L15.3389 19.7182C15.5201 19.8974 15.7641 19.9986 16.0189 20.0002Z" fill="white" />
            </svg>
          </Link>
        ) : null}

        <img src={logo} alt='' className='w-[24px] h-[24px]' />
        <p className='font-bold text-xl'>KARMA<span className='font-normal text-white'>LIFE</span></p>
      </div>

    </div>
  );
};

export default Header;
