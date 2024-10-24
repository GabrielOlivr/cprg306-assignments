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

    /*A new item is added to the list correctly, but the sort functionally does not work as intended 
    // if try to change items.map for sortedItems.map will make it so the sorting functions works, but 
    // now the adding a new item to the list func will not work. 
    //Fix sorting problems related to the "Name" and "Category" buttons (item-list.js)
    // Design looks good, matches the expected output, but not 100% functional yet  
    //
    */
    return(
        <main className="bg-slate-950 p-4">
            <h1 className="text-3xl mb-5">Shopping List</h1> 

            <FormsWithInteractivity onAddItem={handleAddItem}  /> 
            <ItemList items={items} />
        </main>

    );
}