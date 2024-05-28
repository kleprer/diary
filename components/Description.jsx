import React from 'react'

const Description = () => {
  return (
    <div className="flex flex-col gap-[21px] position: absolute w-1/2 h-1/3 top-1/3 
        max-md:w-1/3 right-[10px]">
        <h1 className="text-[40px] max-xl:text-[30px] max-925:text-[25px] m-0 p-0">
          Добро пожаловать в ваш персональный ежедневник!
        </h1>
        <h2 className="text-[20px] m-0 p-0">
          Планируйте и создавайте заметки прямо здесь
        </h2>
    </div>
  )
}

export default Description;