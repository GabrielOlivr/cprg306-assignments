export default function Item({itemName, itemQuantity, itemCategory}){

    return(
        <li>
            <h3>{itemName}</h3>
            <p>Buy {itemQuantity} in {itemCategory}</p>
        </li>
    );

}