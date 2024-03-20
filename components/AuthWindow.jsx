import React from 'react'

const AuthWindow = () => {
  return (
    <div className="w-[710px] h-[489px] border-black border-4 rounded-xl m-auto mt-[20px]">
        <div className="flex align-center flex-col w-[554px] m-auto">
            <h2 className="text-[32px] text-center pt-[30px]">
                С возвращением!
            </h2>
            <input className="focus:outline-none text-[20px] text-black opacity-[60%] mt-[50px]
            border-b-4 border-black" type="text" placeholder="Электронная почта">

            </input>
            <input className="focus:outline-none text-[20px] text-black opacity-[60%] mt-[50px]
            border-b-4 border-black" type="text" placeholder="Пароль">

            </input>
            <button className="m-auto text-[24px] text-center w-[238px] 
            border-black border-4 rounded-xl mt-[35px] py-[6px]
            hover:border-gray-300 hover:text-gray-300">
                Войти
            </button>
            <h2 className="text-[20px] text-center mt-[15px]">
                или
            </h2>
            <button className="m-auto text-[24px] text-center w-[238px] 
            border-black border-4 rounded-xl mt-[15px] py-[6px]
            hover:border-gray-300 hover:text-gray-300">
                Регистрация
            </button>
        </div>
    </div>
  )
}

export default AuthWindow;