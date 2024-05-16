import React from "react";

const DairyWindow = () => {
    return (
        <div className="h-[520px] mb-[20px] ml-[10px] mr-[20px] 
        border-black border-[4px] rounded-xl mt-[20px]">        
            <textarea className="peer w-full min-h-full  resize-none p-[10px]
            outline-none focus:border-t-transparent  rounded-xl
            focus:outline-0 disabled:resize-none disabled:border-0"
            placeholder="Как прошел ваш день?"></textarea>
        </div>
    )
}
export default DairyWindow