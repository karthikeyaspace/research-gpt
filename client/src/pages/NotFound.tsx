import React from 'react';

const NotFound: React.FC = () => {
  return (
    <div className="bg-black text-white h-screen flex justify-center items-center font-sans">
      <div>
        <span className="text-2xl mr-5">404</span>
        <span className="text-lg">This page could not be found.</span>
      </div>
    </div>
  );
}

export default NotFound;