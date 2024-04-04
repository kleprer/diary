import Link from 'next/link';
import React from 'react'
import ButtonRA from './ButtonRA';
import InputAR from './InputAR';

const AuthWindow = () => {
  return (
    <div className="w-[710px] h-[489px] border-black border-4 rounded-xl m-auto mt-[20px]">
        <div className="flex align-center flex-col w-[554px] m-auto">
            <h2 className="text-[32px] text-center pt-[30px]">
                С возвращением!
            </h2>
            <InputAR name="Электронная почта" />
            <InputAR name="Пароль" />
            <Link href="/calendar" className="m-auto"> <ButtonRA name="Войти" /> </Link>
            <h2 className="text-[20px] text-center mt-[15px]">
                или
            </h2>
            <Link href="/registration" className="m-auto">
            <ButtonRA name="Регистрация" />
            </Link>
        </div>
    </div>
  )
}

export default AuthWindow;