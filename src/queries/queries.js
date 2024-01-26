import db from '../db';

const getItems = async ({queryKey}) =>{
    const [, searchTerm] = queryKey;
    try{
        const items = [];
        const tx = db.transaction('items');
        let cursor = await tx.store.openCursor();
        while(cursor){
            if(searchTerm){
                if(cursor.value.itemName.toLowerCase().includes(searchTerm.toLowerCase())){
                    items.push(cursor.value);
                }
            }else{
                items.push(cursor.value);
            }
            cursor = await cursor.continue();
        }
        await tx.done;
        return items;
    }catch(err){
        return err;
    }
}

const getItem = async ({queryKey}) =>{
    const [, itemId] = queryKey;
    try{
        const itemData = await db.transaction('items', 'readonly').store.get(parseInt(itemId));
        return itemData;
    }catch(e){
        console.log(e.message);
    }
}

const getInfiniteItems = async ({queryKey, pageParam}) =>{
    let limit = 0;
    const keyRange = pageParam ? IDBKeyRange.upperBound(pageParam, true) : null;
    const [, searchTerm] = queryKey;
    try{
        const items = [];
        const tx = db.transaction('items');
        let cursor = await tx.store.openCursor(keyRange, 'prev');
        while(limit <= 10 && cursor){
            if(searchTerm){
                if(cursor.value.itemName.toLowerCase().includes(searchTerm.toLowerCase())){
                    items.push(cursor.value);
                    limit++;
                }
            }else{
                items.push(cursor.value);
                limit++;
            }
            cursor = await cursor.continue();
        }
        await tx.done;
        return items;
    }catch(err){
        return err;
    }
}

export {getItems, getItem, getInfiniteItems};