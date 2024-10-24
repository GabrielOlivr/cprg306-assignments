import { useState } from "react";
import Item from "./item";
import itemsData from "./items.json";

 export default function ItemList({ items }){

    const [sortBy, setSortBy] = useState("name");

    const sortedItems = [...itemsData].sort((a, b) => {
         if (sortBy == "name"){
             return a.name.localeCompare(b.name);
        } else if (sortBy == "category") {
            return a.category.localeCompare(b.category);
        }
        return 0;
    });

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
            {items.length > 0 ? (
                items.map((item) => (
                    <Item
                    key={item.id}
                    name={item.name}
                    quantity={item.quantity}
                    category={item.category}
                    />
                ))
            ):(
                <p>NO ITEM</p>
            )}
        </div>
    );
}
