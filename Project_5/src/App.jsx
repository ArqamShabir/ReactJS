import { collection, onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { AiFillPlusCircle } from 'react-icons/ai';
import { FiSearch } from 'react-icons/fi';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddUpdateContact from './components/AddUpdateContact';
import ContactsCard from './components/ContactsCard';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import { db } from './config/firebase';
import DiscloseState from './hooks/DiscloseState';

function App() {

  const [data,setData] = useState([]);
  const {Open,Close,open} = DiscloseState();

  const filterContacts = (e) => {
    const value = e.target.value;

    const contactsRef = collection(db,"contacts");

    onSnapshot(contactsRef,(snapshot) => {
      const contactsData = snapshot.docs.map((doc) => {
        return{
          id : doc.id,
          ...doc.data(),
        }
      });

      const filterData = contactsData.filter((contact) => contact.name.toLowerCase().includes(value.toLowerCase()));

      setData(filterData);
      return filterData;
    });
    
  }

  useEffect(() => {
    const getContacts = async () => {
        try {
          const contactsRef = collection(db,"contacts");

          onSnapshot(contactsRef,(snapshot) => {
            const contactsData = snapshot.docs.map((doc) => {
              return{
                id : doc.id,
                ...doc.data(),
              }
            });
            setData(contactsData);
            return contactsData;
          });
        } catch (error) {
          console.log(error);
        }
    };
    getContacts();
  },[])

  return(
  <>
  <div className='max-w-[370px] mx-auto px-4'>
    <Navbar/>
    <div className='flex gap-2'>
    <div className='flex relative items-center flex-grow'>
      <FiSearch className='absolute text-white ml-2 text-3xl'/>
      <input onChange={filterContacts} type='text' className='h-10 flex-grow text-white pl-11 rounded-md border border-white bg-transparent p-2'/>
    </div>
      <AiFillPlusCircle onClick={Open} className='text-5xl text-white cursor-pointer'/>
    </div>

    <div className='mt-4 flex flex-col gap-3'>
      { data.length <=0 ? <NotFound/> :
        data.map((contacts) => {
          return(
              <ContactsCard name={contacts.name} email={contacts.email} id={contacts.id}/>
        )})
      }
    </div>

  </div>

  <AddUpdateContact isOpen={open} onClose={Close}/>
  <ToastContainer position='bottom-center' />
    </>
  )
}

export default App