export default function Item({name, quantity, category, onSelect, onRemove}){

    return (
        <ul onClick={() => onSelect(name)} className="item">
          <li className="bg-slate-900 max-w-sm p-2 m-4 hover:bg-yellow-700 cursor-pointer">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold">{name}</h3>
                <p className="text-sm">Buy {quantity} in {category}</p>
              </div>
              <button 
                //</div>onClick={(e) => {
                  //e.stopPropagation(); Prevents triggering onSelect when clicking the remove button
                  //console.log(`Removing item: ${name}`); Debugging log
                  //onRemove(name); Calls the parent function to remove the item
                //}}
                className="ml-4 bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-700"
              >
                Remove
              </button>
            </div>
          </li>
        </ul>
      );
}

