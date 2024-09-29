import ItemList from "./item-list";

export default function Page(){

    return (
        <main className="bg-slate-950">
            <h1 className="text-3xl">Shopping List</h1>
            <ItemList />
        </main>
    )
}