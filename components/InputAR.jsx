import React from "react";

const InputAR = (props) => {
    return(
        <div>
            <input className="focus:outline-none text-[20px] text-black opacity-[60%] w-full mt-[50px]
            border-b-4 border-black" type="text" placeholder = {props.name} />
        </div>
    )
}

export default InputAR