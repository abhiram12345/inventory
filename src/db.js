import {openDB} from 'idb';

const db = await openDB('item_inventory_db', 2, {
    upgrade(db){
        const items = db.createObjectStore('items', {keyPath:'id', autoIncrement:true});
        items.createIndex('itemName', 'itemName', {unique:false});
        items.add({
            itemName:'phone',
            stock:1,
            price:2000
        });
    }
});

/*const connectDB = (callback) =>{
    const dbConnection = window.indexedDB.open('item_inventory_db', 1);
    dbConnection.onupgradeneeded = (e)=>{
        const db = e.target.result;
        const items = db.createObjectStore('items', {keyPath:'id', autoIncrement:true});
        items.createIndex('itemName', 'itemName', {unique:false});
        items.add({
            itemName:'phone',
            stock:1,
            price:2000
        });
    }
    dbConnection.onsuccess = (e) =>{
        const db = e.target.result;
        callback(db)
    }
}*/

export default db;