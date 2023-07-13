import React from "react";

const WorkItem = ({year, title, duration, details}) =>{
    return(
        <ol className="flex flex-col md:flex-row relative border-l border-stone-400 font-mono pt-4">
            <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-stone-400 rounded-full mt-1.5 -left-1.5 border-stone-900"/>
                <p className="felx flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
                    <span className="inline-block px-2 py-1 font-semibold text-white bg-emerald-800 rounded-md">{year}</span>
                    <span className="text-lg font-semibold text-emerald-900 pr-4 pl-4">{title}</span>
                    <span className="my-1 text-sm font-normal landing-none text-stone-400">{duration}</span>
                </p>
                <p className="pt-2">
                <span className="my-2 text-base font-normal text-stone-600">{details}</span>
                </p>
            </li>
        </ol>
    );
};

export default WorkItem

