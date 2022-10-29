
import { initializeApp } from "firebase/app";
import { collection, doc, getDoc, getDocs, query, where, getFirestore, Timestamp, addDoc, updateDoc } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBPEar_7YtNlhzYc_08gnO9QzQC-snvxlg",
    authDomain: "burger-b321b.firebaseapp.com",
    projectId: "burger-b321b",
    storageBucket: "burger-b321b.appspot.com",
    messagingSenderId: "1070193216464",
    appId: "1:1070193216464:web:d9a0ee25b11ec23cbac7d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const DB = getFirestore(app)

// Todos los productos 
export async function getAllItems() {
    const miColec = collection(DB, 'productos');
    const itemsSnapshot = await getDocs(miColec);
    return itemsSnapshot.docs.map(doc => {
        return {
            ...doc.data(),
            id: doc.id
        }
    })
};

// Productos por categoria
export async function getItemsByCategory(categoryid) {
    const miColec = collection(DB, 'productos');
    const queryItem = query(miColec, where("categoryid", '==', categoryid));
    const itemSnapshot = await getDocs(queryItem);

    return itemSnapshot.docs.map(doc => {
        return {
            ...doc.data(),
            id: doc.id
        }

    })
};

// Producto segun ID
export async function getItem(id) {
    const miColec = collection(DB, 'productos');
    const itemRef = doc(miColec, id);
    const itemSnapshot = await getDoc(itemRef);
    return {
        ...itemSnapshot.data(),
        id: itemSnapshot.id
    }
};

// Actualiza STOCK de un producto
export async function updateProducto (id, info) {
    const estado = await updateDoc(doc(DB, "productos", id), info)
    return estado
}

// Crea la orden de compra
export async function createBuyOrder(orderData) {
    const buyTimeStamp = Timestamp.now();
    const orderWithDate = {
        ...orderData,
        date: buyTimeStamp
    };
    const miColec = collection(DB, 'buyOrders');
    const orderDoc = await addDoc(miColec, orderWithDate);
    return orderDoc.id;
}