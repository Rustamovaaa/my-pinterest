import Image from 'next/image'
import React from 'react'
import { BsChatDotsFill } from 'react-icons/bs'
import { FaBell, FaSearch } from 'react-icons/fa'

function Header () {
  return (
    <div className='flex gap-3 items-center p-6'>
      <Image
      src='/logo.png'
      alt='logo'
      width={50}
      height={50}
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
      flex gap-3 items-center
      rounded-full w-full'>
      <FaSearch className='text-[25px] text-gray-500'/>
      <input type="text" 
      placeholder='Search'
      className='bg-transparent' />
      </div>
      <FaBell className='text-[40px] text-gray-500'/>
      <BsChatDotsFill className='text-[40px] text-gray-500' />
      <Image
      src='/man.png'
      alt='user-avatar'
      width={50}
      height={50}
      />

    </div>
  )
}

export default Header 
