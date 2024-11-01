export default function Item({name, quantity, category, onSelect}){

    return(
        <ul onClick={() => onSelect(name)} className="item"> 
            <li className="bg-slate-900 max-w-sm p-2 m-4">
                <h3 className="text-xl font-bold">{name}</h3>
                <p className="text-sm">Buy {quantity} in {category}</p>
            </li>
        </ul>
    );

}

