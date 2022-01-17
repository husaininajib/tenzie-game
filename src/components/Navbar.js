import React from "react";


export default function Navbar(props) {
    return (
        <nav className="flex justify-center gap-6 px-4 py-3 bg-indigo-600">
            <div className="roll-count grid place-items-center">
                <h3 className="text-white font-semibold">Roll Count</h3>
                <div className="w-8 h-5 bg-white">
                    {props.count}
                </div>
            </div>
            <div className="time grid place-items-center">
                <h4 className="text-white font-semibold">Time</h4>
                <div className="w-8 h-5 bg-white">
                    
                </div>
            </div>
        </nav>
    )
}