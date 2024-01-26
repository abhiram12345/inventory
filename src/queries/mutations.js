import db from "../db"

const addItem = async (data) =>{
    await db.transaction('items', 'readwrite').store.put(data);
}

const editStock = async ({mode, itemId, stockValue})=>{
    const tx = db.transaction('items', 'readwrite');
    const item = await tx.store.get(parseInt(itemId));
    let currentStock = item.stock;
    if(mode === 'add') {
        currentStock += parseInt(stockValue);
    }else {
        if(currentStock > 0){
            currentStock -= parseInt(stockValue);
        }
    }
    await tx.store.put({
        ...item,
        stock : currentStock
    });
}

const updateItemName = async ({itemName, price, itemId}) =>{
    const tx = db.transaction('items', 'readwrite');
    const item = await tx.store.get(parseInt(itemId));
    await tx.store.put({
        ...item,
        itemName,
        price
    });
}

const deleteItem = async (itemId) =>{
    await db.transaction('items', 'readwrite').store.delete(parseInt(itemId));
}

const deleteAllItems = async () =>{
    await db.transaction('items', 'readwrite').store.clear();
}

export {addItem, editStock, updateItemName, deleteItem, deleteAllItems};