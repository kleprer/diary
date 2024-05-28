import React from "react";

const ButtonRA = (props) => {
    return(
        <div>
            <button className="text-[24px] text-center w-[296px] 
            border-black border-4 rounded-xl mt-[15px] py-[6px]
            hover:border-gray-300 hover:text-gray-300">
                {props.name}
            </button>
        </div>
    )
}

export default ButtonRA;