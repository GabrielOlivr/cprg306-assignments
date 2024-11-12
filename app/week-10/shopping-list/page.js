"use client"

import ItemList from "./item-list";
import FormsWithInteractivity from "./new-item";
import MealIdeas from "./meal-ideas";
import { useState, useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context";
import { dbGetItems, dbAddItem } from "../_services/shopping-list-service";

export default function Page() {
    const { user, firebaseSignOut } = useUserAuth();
    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState("");

    const loadItems = async () => {
        if (user) {
            const fetchedItems = await dbGetItems(user.uid);
            setItems(fetchedItems);
        }
    };

    useEffect(() => {
        loadItems();
    }, [user]);

    const handleAddItem = async (newItem) => {
        if (user) {
            const itemId = await dbAddItem(user.uid, newItem);
            setItems((prevItems) => [...prevItems, { id: itemId, ...newItem }]);
        }
    };

    const handleItemSelect = (itemName) => {
        const cleanName = itemName
            .split(",")[0]
            .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|[\u2011-\u26FF]|[\uD83C-\uDBFF][\uDC00-\uDFFF])/g, "")
            .trim();
        setSelectedItemName(cleanName);
    };

    if (!user) {
        return (
            <div>
                <p className="text-lg mb-4">Please sign in to see this page.</p>
                <a className="bg-yellow-700 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded" href="/week-10">
                    Sign-In Page
                </a>
            </div>
        );
    }

    return (
        <main className="bg-slate-950 p-2 m-2">
            <div className="flex space-x-5 p-2 ">
                <div className="flex flex-col">
                    <FormsWithInteractivity onAddItem={handleAddItem} />
                    <ItemList items={items} onItemSelect={handleItemSelect} />
                </div>
                    <div className="w-1/2">
                        <MealIdeas ingredient={selectedItemName} />
                    </div>
                <div>
                    <button onClick={firebaseSignOut} className="bg-yellow-700 hover:bg-yellow-500 text-white font-bold mt-4 py-2 px-4 rounded">
                        Sign Out
                    </button>
                </div>
            </div>
        </main>
    );
}

/*
Functionality wise the code is working as expected, but when trying to add remove button 
the code errors out and can't get the functionality to work as intended 

****Try to fix remove button: so that it works as it should (OPTIONAL but a nice feature) ****
****Finish styling the code, so it looks clean

*/