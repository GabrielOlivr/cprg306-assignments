"use client"

import ItemList from "./item-list";
import FormsWithInteractivity from "./new-item";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";
import { useState } from "react";

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

    return(

        <div className="flex space-x-5 p-2">
            <div className="flex flex-col">
                <FormsWithInteractivity onAddItem={handleAddItem} />
                <ItemList items={items} onItemSelect={handleItemSelect} />
            </div>
            <div className="w-1/2">
                <MealIdeas ingredient={selectedItemName} /> 
            </div>
        </div>
    );
}