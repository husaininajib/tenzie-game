import React from "react";

export default function Main(props) {
    return (
            <div 
                className="number-card shadow-md w-12 h-12 grid place-items-center "
            >
                <span className="font-bold">{props.value}</span>
            </div>
    )
}