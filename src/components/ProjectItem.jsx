import React from "react";

const ProjetItem = ({img, title}) => {
    return(
        <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-emerald-900 ">
            <img src={img} alt="/" className="rounded-xl group-hover:opacity-10" />
            <div className="hidden group-hover:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h3 className=" text-2xl font-bold text-white tracking-wider text-center font-mono">
                    {title}
                </h3>
                <p className="pb-4 pt-2 text-white text-center font-mono">React Js</p>
                <a href="/">
                    <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg">Mas Info...</p>
                </a>
            </div>
        </div>
    )
} 

export default ProjetItem