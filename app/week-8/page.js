"use client"

/*
    The code is fetching using the api 
    and it is sending a response back with the appropriate 
    information. But the code need some polish for styling and
    to make sure that evering is work as spected in the end

    Functionality:
    1. If there are no meals available for an item display a different message "No meal ideas found for {ingredient}"

    Styling:
    1. Make the item list display a hover / button 
    2. Make the meal ideas display to the right of the list 
    3. Style the displayed meals 

*/

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
        <main className="bg-slate-950 p-4">
            <h1 className="text-3xl mb-5">Shopping List</h1> 

            <FormsWithInteractivity onAddItem={handleAddItem}  /> 
            <ItemList items={items} onItemSelect={handleItemSelect}/>
            <MealIdeas ingredient={selectedItemName} />
        </main>

    );
}