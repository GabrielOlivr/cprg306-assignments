export default function Item({ itemName, itemQuantity, itemCategory }) {
    
    let itemStyle = "p-2 m-4 bg-slate-900 max-w-sm"

    return (
      <li className={itemStyle}>
        <h3 className="text-xl font-bold">{itemName}</h3>
        <p className="text-sm">Buy {itemQuantity} in {itemCategory}</p>
      </li>
    );
  }
  
  