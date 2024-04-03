import React from 'react'
import Link from 'next/link'

const NavbarAuth = () => {
  return (
    <nav className="flex justify-start items-center w-full h-72 bg-transparent 
    top-0 mt-2 ml-[10px] position: relative">
      <Link href="/">     
        <h2 className=" mr-[20px] text-{20} text-black px-8 py-3 
        border-black border-4 rounded-xl hover:border-gray-300 hover:text-gray-300 
        hover:cursor-pointer">
            На главную
        </h2>
      </Link>      
    </nav>
  )
}

export default NavbarAuth;