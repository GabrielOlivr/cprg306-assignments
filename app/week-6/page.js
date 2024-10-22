"use client"

import ItemList from "./item-list";
export default function Page(){

    return(
        <main className="bg-slate-950 p-4">
            <h1 className="text-3xl mb-5">Shopping List</h1>  
            <ItemList />
        </main>

    );
}