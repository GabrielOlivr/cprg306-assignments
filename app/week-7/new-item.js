"use client"

import { useState } from "react";


export default function FormsWithInteractivity({ onAddItem }){

const [quantity, setQuantity] = useState(1);
const [name, setName] = useState("");
const [category, setCategory] = useState("produce");

const generateRandId = () => Math.random().toString(36).substring(2,9);

const handleNameChange = (event) => {
    setName(event.target.value);
}

const handleCategoryChange = (event) => setCategory(event.target.value);

const handleSubmit = (event) => {
    event.preventDefault();

    const newItem = {
        id: generateRandId(),
        name,
        quantity,
        category,
    };

    onAddItem(newItem);

    setName("");
    setQuantity(1);
    setCategory("produce");

}

//handles increment (+) button 
const incrementQuantity = () => {
    if(quantity < 20){
        setQuantity(quantity + 1);
    }
}
//handles decrement (-) button 
const decrementQuantity = () => {
    if(quantity > 1){
        setQuantity(quantity - 1);
    }
}

//button style
let btnStyles = "bg-yellow-500 text-white text-sm rounded-md p-1 px-3 mr-1 hover:bg-yellow-800 disabled:bg-gray-500"

let incrementBtnDisabled = false;
if(quantity >= 20){
    incrementBtnDisabled = true;
}

let decrementBtnDisabled = false;
if(quantity <= 1){
    decrementBtnDisabled = true;
}

return (
        <main className=" w-full">
            <form className="p-2 m-4 bg-slate-900 text-black max-w-sm w-full" onSubmit={handleSubmit}>
                <div className="mb-2">
                    <input type="text" 
                        value={name}
                        onChange={handleNameChange}
                        placeholder="Item name"
                        required
                        className="w-full mt-1
                        border-2 border-gray-300 p-2 rounded-lg"
                    />
                </div>
                <div className="flex justify-between">
                    <div className="p-2 mt-1 mb-1 rounded-md bg-white text-white w-36">
                        <div className="flex justify-between">
                            <span className="text-black">{quantity}</span>
                        <div className="flex">
                            <button type="button" className= {btnStyles} onClick={decrementQuantity} disabled={decrementBtnDisabled}>-</button>
                            <button type="button" className= {btnStyles} onClick={incrementQuantity} disabled={incrementBtnDisabled}>+</button>  
                        </div>
                    </div>
                </div>
                <select className="ml-1 border-2 border-gray-300 p-2 rounded-lg" value={category} onChange={handleCategoryChange}>
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="frozen foods">Frozen Foods</option>
                    <option value="canned goods">Canned Goods</option>
                    <option value="dry goods">Dry Goods</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option>
                    <option value="household">Household</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <button type="submit" className="w-full mt-4 py-2 px-4 bg-yellow-500 text-white rounded-lg hover:bg-yellow-800">+</button>
            </form>
        </main>
);
}

