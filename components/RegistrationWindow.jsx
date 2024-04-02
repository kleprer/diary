import React from 'react'
import Link from 'next/link';

const RegistrationWindow = () => {
    return (
        <div className="w-[710px] h-[489px] border-black border-4 rounded-xl m-auto mt-[20px]">
            <div className="flex align-center flex-col w-[554px] m-auto">
                <h2 className="text-[32px] text-center pt-[30px]">
                    Впервые здесь?
                </h2>
                <input className="focus:outline-none text-[20px] text-black opacity-[60%] mt-[50px]
                border-b-4 border-black" type="text" placeholder="Имя">
    
                </input>
                <input className="focus:outline-none text-[20px] text-black opacity-[60%] mt-[50px]
                border-b-4 border-black" type="text" placeholder="Электронная почта">

                </input>
                <input className="focus:outline-none text-[20px] text-black opacity-[60%] mt-[50px]
                border-b-4 border-black" type="text" placeholder="Пароль">
    
                </input>
                <Link href="/calendar" className="m-auto"><button className="m-auto text-[24px] text-center w-[296px] 
                border-black border-4 rounded-xl mt-[50px] py-[6px]
                hover:border-gray-300 hover:text-gray-300">
                    Создать аккаунт
                </button></Link>
            </div>
        </div>
      )
}

export default RegistrationWindow;