import React from 'react';
import { createPortal } from "react-dom";
import { AiOutlineClose } from 'react-icons/ai';

function Model({onClose,isOpen,children}) {
  return createPortal(
    <>
    {isOpen &&
    <>
        <div className='absolute z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <div className='relative min-w-[300px] max-w-[300px] min-h-[200px] bg-white p-4'>
            <div className='flex justify-end'> 
                <AiOutlineClose onClick={onClose} className='text-2xl cursor-pointer'/>
            </div>
            {children}
        </div>
        </div>
        <div onClick={onClose} className='w-screen h-screen backdrop-blur z-40 top-0 absolute'/>
    </>
    }
    </>,
    document.getElementById("model-root")
  )
}

export default Model