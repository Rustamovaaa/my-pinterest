'use client'
import Image from 'next/image'
import React from 'react'
import { BsChatDotsFill } from 'react-icons/bs'
import { FaBell, FaSearch } from 'react-icons/fa'
import { useSession, signIn, signOut } from "next-auth/react"
import { doc, getFirestore, setDoc } from 'firebase/firestore'
import app from './../Shared/firebaseConfig'

function Header () {
  const { data: session } = useSession();

  const db = getFirestore(app);

  const saveUserInfo = async() => {
    if(session.user) {
      await setDoc(doc(db, "user", "LA"), {
        name: "Los Angeles",
        state: "CA",
        country: "USA"
      });
    }
  }

  
  return (
    <div className='flex gap-3 md:gap-2 items-center p-6'>
      <Image
      src='/logo.png'
      alt='logo'
      width={55}
      height={60}
      className='hover:bg-gray-300 p-2 
      rounded-full 
      cursor-pointer' />
      <button 
      className='bg-black
      text-white 
      px-4 py-2 
      rounded-full'>Home</button>
      <button 
      className='font-semibold 
      px-4 py-2'>Create</button>
      <div 
      className='bg-[#e9e9e9] p-3 
      gap-3 items-center
      rounded-full w-full
      hidden md:flex'>
      <FaSearch className='text-[25px] text-gray-500 md:hidden
      '/>
      <input type="text" 
      placeholder='Search'
      className='bg-transparent' />
      </div>
      <FaBell className='text-[40px] text-gray-500'/>
      <BsChatDotsFill className='text-[40px] text-gray-500' />
      { session?.user? <Image
      src={session?.user?.image}
      alt='user-avatar'
      width={35}
      height={35}
      className='rounded-full'
      /> :
      <button className='font-semibold px-2 py-4'
      onClick={() => signIn()}
      >Login</button> }

    </div>
  )
}

export default Header
