import React from 'react'
import Link from 'next/link';
import InputAR from './InputAR';
import ButtonRA from './ButtonRA';

const RegistrationWindow = () => {
    return (
        <div className="w-[710px] h-[489px] border-black border-4 rounded-xl m-auto mt-[20px]">
            <div className="flex align-center flex-col w-[554px] m-auto">
                <h2 className="text-[32px] text-center pt-[30px]">
                    Впервые здесь?
                </h2>
                <InputAR name ="Имя" />
                <InputAR name="Электронная почта" />
                <InputAR name="Пароль" />
                <Link href="/calendar" className="m-auto">
                    <ButtonRA name = "Создать аккаунт" />
                </Link>
            </div>
        </div>
      )
}

export default RegistrationWindow;