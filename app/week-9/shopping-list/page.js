"use client"

import ItemList from "./item-list";
import FormsWithInteractivity from "./new-item";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";
import { useState } from "react";
import { useUserAuth } from "../_utils/auth-context";

export default function Page(){

    const [items, setItems] = useState([...itemsData]);
    const handleAddItem = (newItem) => {
        setItems((prevItems) => [...prevItems, newItem]);
    }

    const [selectedItemName, setSelectedItemName] = useState ('');

    const handleItemSelect = (itemName) => {
        const cleanName = itemName
        .split(',')[0]
        .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|[\u2011-\u26FF]|[\uD83C-\uDBFF][\uDC00-\uDFFF])/g, '')
        .trim();

        setSelectedItemName(cleanName);
    };

    const {user, firebaseSignOut} = useUserAuth()

    if (!user) {
        return (
            <div>
                <p className="text-lg mb-4">Please sign in to see this page.</p>
                <a className="bg-yellow-700 hover:bg-yellow-500 text-white font-blod py-2 px-4 rounded" href="/week-9">
                     Sign-In Page
                </a>
            </div>
        )
    }
    return(
        <div className="flex space-x-5 p-2">
            <div className="flex flex-col">
                <FormsWithInteractivity onAddItem={handleAddItem} />
                <ItemList items={items} onItemSelect={handleItemSelect} />
            </div>
            <div className="w-1/2">
                <MealIdeas ingredient={selectedItemName} /> 
            </div>
            <div>
                <button onClick={firebaseSignOut} className="bg-yellow-700 hover:bg-yellow-500 text-white font-bold mt-4 py-2 px-4 rounded">Sign Out</button>
            </div>
        </div>
    );
}