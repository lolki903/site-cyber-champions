import React from 'react';

const ButonDeconec = ({text}) => {
    const deconection = () => {
        localStorage.removeItem("token")
        window.location.href = "/"
    }
  return (
    <div className='mb-4'>
        <button onClick={deconection} className='px-6 py-4 bg-white rounded-2xl leading-19 text-primay '>{text}</button>
    </div>
  );
};

export default ButonDeconec;
