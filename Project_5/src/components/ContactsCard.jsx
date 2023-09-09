import { deleteDoc, doc } from 'firebase/firestore';
import React from 'react';
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import { toast } from 'react-toastify';
import { db } from '../config/firebase';
import DiscloseState from '../hooks/DiscloseState';
import AddUpdateContact from './AddUpdateContact';

function ContactsCard({id,name,email}) {

    const {Open,Close,open} = DiscloseState();

    const deleteContact = async (id) => {
        try {
            await deleteDoc(doc(db,"contacts",id));
            toast.success("Contact Deleted Successfully");
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <>
    <div key={id} className='bg-yellow flex justify-between rounded-lg p-2 items-center'>
    <div className='flex gap-2 items-center'>
      <HiOutlineUserCircle className='text-orange text-4xl'/>
        <div className=''>
            <h2 className='font-medium'>{name}</h2>
            <p className='text-sm'>{email}</p>
        </div>
      </div>  
        <div className='flex text-3xl gap-1'>
            <RiEditCircleLine className='cursor-pointer' onClick={Open}/>
            <IoMdTrash onClick={() => deleteContact(id)} className='text-orange cursor-pointer'/>
          </div>
    </div>
    <AddUpdateContact isUpdate contact={{id,name,email}} isOpen={open} onClose={Close} />
    </>
  )
}

export default ContactsCard;