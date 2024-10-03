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

let btnStyles = "bg-teal-500 text-white text-xl rounded py-2 px-6 mt-3 mr-2 me-3 ms-3 hover:bg-teal-800 disabled:bg-gray-500"


let incrementBtnDisabled = false;
if(quantity >= 20){
    incrementBtnDisabled = true;
}

let decrementBtnDisabled = false;
if(quantity <= 1){
    decrementBtnDisabled = true;
}

return (
    <div className="flex flex-col items-center">
        <div className="bg-white p-6 rounded flex flex-col items-center">
            <h1 className="text-center text-3xl text-black">{quantity}</h1>
            <div className="flex justify-center">
                <button className= {btnStyles} onClick={decrementQuantity} disabled={decrementBtnDisabled}>-</button>
                <button className= {btnStyles} onClick={incrementQuantity} disabled={incrementBtnDisabled}>+</button>  
            </div>
        </div>
    </div>
);

}

