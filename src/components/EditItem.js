import { useMutation, useQueryClient } from "react-query";
import { updateItemName } from "../queries/mutations";
import { useState } from "react";

export default function EditItem({itemName, itemPrice, setIsOpen, itemId, callSetView}){
    const [name, setName] = useState(itemName);
    const [price, setPrice] = useState(itemPrice);
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: updateItemName,
        onSuccess: ()=> {
            setIsOpen(false);
            queryClient.invalidateQueries(['item', itemId]);
        }
    });
    return(<div>
        <label className="mx-auto w-100">
        <p className="text-label">Item name</p>
        <input type="text" className="normal" value={name} onChange={(e)=>{
            setName(e.target.value);
        }}></input>
        </label>
        <label className="mx-auto w-100">
        <p className="text-label">Price</p>
        <input type="number" className="normal" value={price} min='0' onChange={(e)=>{
            setPrice(e.target.value);
        }}></input>
        </label>
        <button className="btn btn-primary mx-auto d-block mt-3" style={{
            width:'70%'
        }} onClick={()=>{
            mutation.mutateAsync({
                itemId,
                itemName:name,
                price
            });
        }}>Submit</button>
        <button className="btn border-danger text-danger mx-auto d-block mt-3" style={{
            width:'70%'
        }} onClick={()=>{
            callSetView('delete');
        }}>Delete</button>
    </div>);
}