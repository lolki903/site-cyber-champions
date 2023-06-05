import React from 'react'

const BlockDiv  = ({text,img}) => {
    return (
        <div className="flex-col bg-white pt-7 pb-7 rounded-2xl w-2/12 items-center ml-4 mr-4 frr">
        <img src={img} alt={text} className="m-auto img-themes mb-10" />
        <p className='text-black m-auto text-center w-6/12 font-bold'>{text}</p> 
     </div>
    )
  }

export default BlockDiv
