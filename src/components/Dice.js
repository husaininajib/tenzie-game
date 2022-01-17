import React from "react";

export default function Dice(props) {
    const diceDots = props.value
    // console.log(props.isHeld)
    return (
        <div className="dice-card rounded-lg grid place-items-center">
            <div className="dot-container">
                <i className={`fas fa-dice-${diceDots === 1 ? "one" :
                diceDots === 2 ? "two" : diceDots === 3 ? "three" :
                diceDots === 4 ? "four" : diceDots === 5 ? "five" : "six"} 
                ${props.isHeld ? "text-black" : "text-blue-400"}`}
                onClick={props.change}
                >
                </i>
            </div>
        </div>
    )
}