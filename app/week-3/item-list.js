import Item from './item';

export default function ItemList() {

  const item1 = {
    name: "milk, 4 L 🥛",
    quantity: 1,
    category: "dairy",
  };

  const item2 = {
    name: "bread 🍞",
    quantity: 2,
    category: "bakery",
  };

  const item3 = {
    name: "eggs, dozen 🥚",
    quantity: 2,
    category: "dairy",
  };

  const item4 = {
    name: "bananas 🍌",
    quantity: 6,
    category: "produce",
  };

  const item5 = {
    name: "broccoli 🥦",
    quantity: 3,
    category: "produce",
  };

  const item6 = {
    name: "chicken breasts, 1 kg 🍗",
    quantity: 1,
    category: "meat",
  };

  const item7 = {
    name: "pasta sauce 🍝",
    quantity: 3,
    category: "canned goods",
  };

  const item8 = {
    name: "spaghetti, 454 g 🍝",
    quantity: 2,
    category: "dry goods",
  };

  const item9 = {
    name: "toilet paper, 12 pack 🧻",
    quantity: 1,
    category: "household",
  };

  const item10 = {
    name: "paper towels, 6 pack",
    quantity: 1,
    category: "household",
  };

  const item11 = {
    name: "dish soap 🍽️",
    quantity: 1,
    category: "household",
  };

  const item12 = {
    name: "hand soap 🧼",
    quantity: 4,
    category: "household",
  };

  return (
    <ul>
      <Item itemName={item1.name} itemQuantity={item1.quantity} itemCategory={item1.category} />
      <Item itemName={item2.name} itemQuantity={item2.quantity} itemCategory={item2.category} />
      <Item itemName={item3.name} itemQuantity={item3.quantity} itemCategory={item3.category} />
      <Item itemName={item4.name} itemQuantity={item4.quantity} itemCategory={item4.category} />
      <Item itemName={item5.name} itemQuantity={item5.quantity} itemCategory={item5.category} />
      <Item itemName={item6.name} itemQuantity={item6.quantity} itemCategory={item6.category} />
      <Item itemName={item7.name} itemQuantity={item7.quantity} itemCategory={item7.category} />
      <Item itemName={item8.name} itemQuantity={item8.quantity} itemCategory={item8.category} />
      <Item itemName={item9.name} itemQuantity={item9.quantity} itemCategory={item9.category} />
      <Item itemName={item10.name} itemQuantity={item10.quantity} itemCategory={item10.category} />
      <Item itemName={item11.name} itemQuantity={item11.quantity} itemCategory={item11.category} />
      <Item itemName={item12.name} itemQuantity={item12.quantity} itemCategory={item12.category} />
    </ul>
  );
}
