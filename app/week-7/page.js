"use client"

import ItemList from "./item-list";
import FormsWithInteractivity from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";

export default function Page(){

    const [items, setItems] = useState([...itemsData]);

    const handleAddItem = (newItem) => {
        setItems((prevItems) => [...prevItems, newItem]);
    }

    return(
        <main className="bg-slate-950 p-4">
            <h1 className="text-3xl mb-5">Shopping List</h1> 

            <FormsWithInteractivity onAddItem={handleAddItem}  /> 
            <ItemList items={items} />
        </main>

    );
}