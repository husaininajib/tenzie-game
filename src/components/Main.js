import React from "react";

export default function Main(props) {
    return (
            <div 
                className={`${props.isHeld? "bg-green-400" : "bg-white"} number-card shadow-md w-12 h-12 grid place-items-center cursor-pointer`}
                onClick={() => props.holdDice(props.id)}
            >
                <span className="font-bold">{props.dieValue}</span>
            </div>
    )
}