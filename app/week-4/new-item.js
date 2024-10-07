"use client"

import { useState } from "react";

export default function QuantityCounter(){

const [quantity, setQuantity] = useState(1);

const incrementQuantity = () => {
    if(quantity < 20){
        setQuantity(quantity + 1);
    }
}

const decrementQuantity = () => {
    if(quantity > 1){
        setQuantity(quantity - 1);
    }
}

let btnStyles = "bg-teal-500 text-white text-sm rounded-md p-1 px-3 mr-1 hover:bg-teal-800 disabled:bg-gray-500"

let incrementBtnDisabled = false;
if(quantity >= 20){
    incrementBtnDisabled = true;
}

let decrementBtnDisabled = false;
if(quantity <= 1){
    decrementBtnDisabled = true;
}

return (
    <div className="flex justify-center">
        <div className="p-2 mt-1 mb-1 rounded-md bg-white text-white w-36">
            <div className="flex justify-between">
                <span className="text-black">{quantity}</span>
                <div className="flex">
                <button type="button" className= {btnStyles} onClick={decrementQuantity} disabled={decrementBtnDisabled}>-</button>
                <button type="button" className= {btnStyles} onClick={incrementQuantity} disabled={incrementBtnDisabled}>+</button> 
                </div>
            </div>
        </div>
    </div>
);
}

