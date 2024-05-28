import React from 'react'
import Link from 'next/link';
const NavbarHome = () => {
  return (
    <nav className="flex justify-end items-center w-full h-72 bg-transparent top-0 mt-2 position: relative">
      <Link href="/auth">
        <h2 className="mr-[20px] text-{20} text-black px-8 py-3 border-black border-4 rounded-xl hover:border-gray-300 
        hover:text-gray-300 hover:cursor-pointer">
          Войти
        </h2>
      </Link>
    </nav>
  )
}

export default NavbarHome;