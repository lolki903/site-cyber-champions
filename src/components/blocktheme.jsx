import React from 'react'

const BlockDiv  = ({text,img}) => {
    return (
        <div className="flex-col bg-white pt-7 pb-7 rounded-lg w-8/12 items-center ml-4 mr-4">
        <img src={img} alt={text} className="m-auto img-themes mb-10" />
        <p className='text-black m-auto text-center w-8/12 font-bold'>{text}</p> 
     </div>
    )
  }

export default BlockDiv
