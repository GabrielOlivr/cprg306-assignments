
export default function Item({name, quantity, category, onSelect, userId, itemId, onItemDelete}){

    return (
        <ul onClick={() => onSelect(name)} className="item">
          <li className="bg-slate-900 max-w-sm p-2 m-4 hover:bg-yellow-700 cursor-pointer">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold">{name}</h3>
                <p className="text-sm">Buy {quantity} in {category}</p>
              </div>
            </div>
          </li>
        </ul>
      );
}

