import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { editStock } from "../queries/mutations";

export default function EditStock({view, setIsOpen, itemId}){
    const [stockValue, setStockValue] = useState(1);
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: editStock,
        onSuccess: ()=> {
            setIsOpen(false);
            queryClient.invalidateQueries(['item', itemId]);
        }
    })
    return(<div>
        <label className="mx-auto w-100">
        <input type="number" className="normal" value={stockValue} onChange={(e)=>{
            setStockValue(e.target.value);
        }}></input>
        </label>
        <button className="btn btn-primary mx-auto d-block mt-3" onClick={()=>{
            mutation.mutateAsync({
                stockValue, 
                itemId,
                mode:view
            });
        }}>{view === 'add' ? 'Add' : 'Reduce'} stock</button>
    </div>);
}