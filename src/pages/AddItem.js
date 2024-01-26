import { useState } from "react";
import SideBar from "../components/SideBar";
import {useMutation} from 'react-query';
import { addItem } from "../queries/mutations";
import { useNavigate } from "react-router-dom";
import HeaderBar from "../components/HeaderBar";

export default function AddItem(){
    const navigate = useNavigate();
    const [itemName, setItemName] = useState('');
    const [price, setPrice] = useState(0);
    const [stock, setStock] = useState(0);
    const mutation = useMutation({
        mutationFn:addItem,
        onSuccess: ()=>{
            navigate('/');
        }
    });
    return(<>
    <HeaderBar/>
    <div className="mt-5">
        <label className="mx-auto d-block">
        <p className="text-label">Item name</p>
        <input type="text" className="normal" value={itemName} onChange={(e)=>{
            setItemName(e.target.value);
        }}></input>
        </label>
        <label className="mx-auto d-block">
        <p className="text-label">Price</p>
        <input type="number" className="normal" value={price} onChange={(e)=>{
            setPrice(e.target.value);
        }}></input>
        </label>
        <label className="mx-auto d-block">
        <p className="text-label">Stock</p>
        <input type="number" className="normal" value={stock} onChange={(e)=>{
            setStock(e.target.value);
        }}></input>
        </label>
        <button className="btn btn-primary mx-auto mt-5 w-50 d-block" onClick={()=>{
            if(itemName){
                mutation.mutateAsync({
                    itemName,
                    price,
                    stock
                })
            }else{
                alert('Please add item name');
            }
        }}>Add</button>
    </div></>);
}