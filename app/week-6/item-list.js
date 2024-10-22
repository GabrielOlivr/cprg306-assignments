import { useState } from "react";
import Item from "./item";
import itemsData from "./items.json";

 export default function ItemList(){

    const [sortBy, setSortBy] = useState("name");
    const [groupByCategory, setGroupByCategory] = useState(false);

    const sortedItems = [...itemsData].sort((a, b) => {
         if (sortBy == "name"){
             return a.name.localeCompare(b.name);
        } else if (sortBy == "category") {
            return a.category.localeCompare(b.category);
        }
        return 0;
    });

    const groupedItems = sortedItems.reduce((acc, item) => {
        if (!acc[item.category]) acc[item.category] = [];
        acc[item.category].push(item);
        return acc;
    }, {});

    const sortedCategories = Object.keys(groupedItems).sort((a,b) => a.localeCompare(b));
   
    const handleGroupByCategory = () => {
        setGroupByCategory(true);
        setSortBy("");
    }
    return(
        <div>
            <label className="text-lg font-semi-bold">Sort By:</label>
            <button className={`p-1 m-2 w-28 ${sortBy === "name" ? "bg-yellow-500" : "bg-yellow-700"}`}
            onClick={() => { setSortBy("name"); setGroupByCategory(false);}}
            >Name</button>
            <button className={`p-1 m-2 w-28 ${sortBy === "category" ? "bg-yellow-500" : "bg-yellow-700"}`}
            onClick={() => { setSortBy("category"); setGroupByCategory(false);}}
            >Category</button>
            <button className={`p-1 m-2 w-28 ${groupByCategory ? "bg-yellow-500" : "bg-yellow-700"}`}
            onClick={handleGroupByCategory}
            >Group By Category</button>
            <ul>
                {groupByCategory ? sortedCategories.map((category) => (
                    <div key={category}>
                        <h1 className="capitalize text-xl">{category}</h1>
                        {groupedItems[category].map((item) => (
                            <li key={item.id}>
                                <Item 
                                    name={item.name}
                                    quantity={item.quantity}
                                    category={item.category}
                                />
                            </li>
                        ))}
                    </div>
                ))
                : sortedItems.map((item) => (
                <li key={item.id}>
                    <Item
                        name={item.name}
                        quantity={item.quantity}
                        category={item.category}
                    />
                </li>
                )) }
            </ul>
        </div>
    );
}