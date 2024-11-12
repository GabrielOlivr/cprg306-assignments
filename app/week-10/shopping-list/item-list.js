import { useState, useEffect } from "react";
import Item from "./item";

 export default function ItemList({ items, onItemSelect}){

    const [sortBy, setSortBy] = useState("name");
    const [sortedItems, setSortedItems] = useState([...items]);

    useEffect (() => {
        const sorted = [...items].sort((a,b) => {
            if (sortBy === "name"){
                return a.name.localeCompare(b.name);
            } else if (sortBy === "category"){
                return a.category.localeCompare(b.category);
            }
            return 0;
        })
        setSortedItems(sorted);
    }, [items, sortBy]);
  
    return(
        <div>
             <label className="text-lg font-semi-bold">Sort By:</label>
                <button className={`p-1 m-2 w-28 ${sortBy === "name" ? "bg-yellow-500" : "bg-yellow-700"}`}
                    onClick={() => { setSortBy("name"); }}
                    >Name
                </button>
                <button className={`p-1 m-2 w-28 ${sortBy === "category" ? "bg-yellow-500" : "bg-yellow-700"}`}
                    onClick={() => { setSortBy("category"); }}
                    >Category
                </button>
                {sortedItems.map((item) => (
                    <Item
                        key={item.id}
                        name={item.name}
                        quantity={item.quantity}
                        category={item.category}
                        onSelect={onItemSelect}
                    />
                ))}
        </div>
    );
}
