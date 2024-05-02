// ErrorPage.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = ({ errorMessage }) => {

    const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-[85vh]">
      <div className="text-4xl text-gray-600 font-bold mb-4">Oops!</div>
      <p className="text-gray-700 mb-8">
        Something went wrong. Please try again later.
      </p>
      {errorMessage && (
        <div className="text-red-500 mb-8">
          Error Details: {errorMessage}
        </div>
      )}
      <img
        src="https://via.placeholder.com/300"
        alt="Error Illustration"
        className="mb-8"
      />
      <button
        onClick={() => window.location.reload()}
        className="bg-[#3EDCFF] hover:bg-[#48b4cc] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Refresh
      </button>
      <span className='w-[200px] flex justify-between items-center gap-4 my-3'>
        <div className='w-full max-w-[100px] min-h-[1px] max-h-[1px] bg-gray-700'>.</div>
        <h1 className='w-fit'>Or</h1>
        <div className='w-full max-w-[100px] min-h-[1px] max-h-[1px] bg-gray-700'>.</div>
      </span>
      <button
        onClick={() => navigate('/')}
        className="bg-[#3EDCFF] hover:bg-[#48b4cc] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Go To Home
      </button>
    </div>
  );
};

export default ErrorPage;
