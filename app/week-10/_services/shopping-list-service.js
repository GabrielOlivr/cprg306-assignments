import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query} from "firebase/firestore";

export async function dbGetItems(userId) {
  const items = [];
  try {
    const itemsRef = collection(db, "users", userId, "items");
    const itemQuery = query(itemsRef);
    const querySnapshot = await getDocs(itemQuery);
    querySnapshot.forEach(doc => {
      items.push({ id: doc.id, ...doc.data() });
    });
  } catch (error) {
    console.error("Error retrieving items: ", error);
  }
  return items;
}

export async function dbAddItem(userId, item) {
  try {
    const itemsRef = collection(db, "users", userId, "items");
    const docRef = await addDoc(itemsRef, item);
    return docRef.id; 
  } catch (error) {
    console.error("Error adding item: ", error);
  }
}


