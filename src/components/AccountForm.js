import React, { useState, useEffect } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../assets/images/karma_favicon.png';
import Header from '../subComponents/Header';

const AccountForm = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showTable, setShowTable] = useState(false);
  const [formState, setFormState] = useState({
    accountNumber: '',
    ifscCode: '',
    bankCode: '',
    city: '',
    state: ''
  });
  const [showBankCodeCity, setShowBankCodeCity] = useState(false);
  const [ifscData, setIfscData] = useState(null);
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'http://ifsc.razorpay.com/search?limit=1000&offset=0&state=IN-HR'
        );
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const toggleBankCodeCity = () => {
    setShowBankCodeCity((prevState) => !prevState);
  };

  const handleStateBlur = async (event, setFieldValue) => {
    const { value } = event.target;
    const alphaCode = convertToStateAlphaCode(value);
    setFieldValue('state', alphaCode);
  };

  const onSubmit = async (values, { setFieldError }) => {
    
    try {
      await validationSchema.validate(values, { abortEarly: false });
    } catch (validationErrors) {
      validationErrors.inner.forEach((error) => {
        setFieldError(error.path, error.message);
      });
      return;
    }

   
    try {
      const response = await axios.get(
        `http://ifsc.razorpay.com/${values.ifscCode}`
      );
      const ifscInfo = response.data;
     
      console.log('IFSC Information:', ifscInfo);
      
      navigate('/success');
    } catch (error) {
      setFieldError('ifscCode', 'Invalid IFSC code');
       
       navigate('/error');
    }
  };

  const convertToStateAlphaCode = (value) => {
    
    const stateToAlphaCode = {
      'Himachal Pradesh': 'HP',
      'Punjab': 'PB',
      'Chandigarh': 'CH',
      'Uttarakhand': 'UA',
      'Haryana': 'HR',
      'Delhi': 'DL',
      'Rajasthan': 'RJ',
      'Uttar Pradesh': 'UP',
      'Bihar': 'BR',
      'Sikkim': 'SK',
      'Arunanchal Pradesh': 'AP',
      'Nagaland': 'NL',
      'Manipur': 'MN',
      'Mizoram': 'MZ',
      'Tripura': 'TR',
      'Meghalaya': 'ML',
      'Assam': 'AS',
      'West Bengal': 'WB',
      'Jharkhand': 'JH',
      'Odisha': 'OR',
      'Chhattisgarh': 'CG',
      'Madhya Pradesh': 'MP',
      'Gujarat': 'GJ',
      'Dadra And Nagar Haveli And Daman And Diu': 'DD,DN',
      'Maharashtra': 'MH',
      'Andhra Pradesh': 'AP',
      'Karnataka': 'KA',
      'Goa': 'GA',
      'Lakshadweep': 'LD',
      'Kerala': 'KL',
      'Tamil Nadu': 'TN',
      'Puducherry': 'PY',
      'Andaman and Nicobar Islands': 'AN',
      'Telangana': 'TS',
      'Ladakh': 'LA',
      'Other Territory': '0T'
    };


    return stateToAlphaCode[value] || value; 
  };

  const validationSchema = Yup.object().shape({
    accountNumber: Yup.string()
      .required('Account Number is required')
      .length(12, 'Account number should be 12 digits.'),
    ifscCode: Yup.string().required('IFSC Code is required'),
    bankCode: Yup.string().required('Bank Code is required'),
    city: Yup.string().required('City is required'),
    state: Yup.string().required('State is required')
  });
  return (
    <div className='font-karma'>
      <Header linkUrl={''} />


      <div className='px-[16px]'>
        <p className='mt-[24px] text-black/50 text-xl'>ENTER ACCOUNT DETAILS</p>
        <Formik initialValues={formState} validationSchema={validationSchema} onSubmit={onSubmit}>
          {({ setFieldValue }) => (
            <Form className="mt-[24px]">
              <div className="flex flex-col">
                <label htmlFor="accountNumber">Account Number:</label>
                <Field className="p-[12px_8px] rounded-[8px] mt-[4px]  text-slate-800 !bg-[#4040400D] !outline-none" type="text" id="accountNumber" name="accountNumber" />
                <ErrorMessage className="!text-red-500 " name="accountNumber" component="div" />
              </div>

              <div className="flex flex-col mt-[12px]">
                <label htmlFor="ifscCode">IFSC Code:</label>
                <Field className="p-[12px_8px]  rounded-[8px] mt-[4px] text-slate-800 !bg-[#4040400D] !outline-none" type="text" id="ifscCode" name="ifscCode" />
                <ErrorMessage className="!text-red-500 " name="ifscCode" component="div" />
                <div className="mt-2 cursor-pointer text-blue-600" onClick={toggleBankCodeCity}>
                  {showBankCodeCity ? 'If you already have Bank Code, click here' : 'Search for IFSC code, click here'}
                </div>
              </div>

              {showBankCodeCity && (
                <>
                  <div className="flex flex-col mt-[12px]">
                    <label htmlFor="bankCode">Bank Name:</label>
                    <Field className="p-[12px_8px] rounded-[8px] mt-[4px] text-slate-800 !bg-[#4040400D] !outline-none" type="text" id="bankCode" name="bankCode" />
                    <ErrorMessage className="!text-red-500" name="bankCode" component="div" />
                  </div>
                  <div className="flex flex-col mt-[12px]">
                    <label htmlFor="state">State:</label>
                    <Field
                      className="p-[12px_8px] rounded-[8px] mt-[4px] text-slate-800 !bg-[#4040400D] !outline-none"
                      type="text"
                      id="state"
                      name="state"
                      onBlur={(event) => handleStateBlur(event, setFieldValue)}
                    />
                    <ErrorMessage className="!text-red-500" name="state" component="div" />
                  </div>
                  <div className="flex flex-col mt-[12px]">
                    <label htmlFor="city">City:</label>
                    <Field className="p-[12px_8px] rounded-[8px] mt-[4px] text-slate-800 !bg-[#4040400D] !outline-none" type="text" id="city" name="city" />
                    <ErrorMessage className="!text-red-500" name="city" component="div" />
                  </div>
                </>
              )}
              <button
                className='!bg-[#3bd9ae] text-white text-center p-[12px_8px] rounded-[8px] block mt-[16px] font-karma font- text-sm tracking-widest w-full'
                type="button"

              >
                Search
              </button>

              {showTable && !loading ? (

                <table>
                  <thead>
                    <tr>
                      <th>IFSC</th>
                      <th>Bank</th>
                      <th>Branch</th>
                      <th>City</th>
                      <th>State</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item, index) => (
                      <tr key={index}>
                        <td>{item.IFSC}</td>
                        <td>{item.BANK}</td>
                        <td>{item.BRANCH}</td>
                        <td>{item.CITY}</td>
                        <td>{item.STATE}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : null}


              <button
                className='!bg-[#3bd9ae] text-white text-center p-[12px_8px] rounded-[8px] block w-full mt-[16px] font-karma font- text-sm tracking-widest'
                type='submit'
              >
                CONTINUE
              </button>
            </Form>
          )}
        </Formik>

      </div>
    </div>
  );
};

export default AccountForm;
