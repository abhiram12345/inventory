import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getItem } from "../queries/queries";
import modalHoc from "../hoc";
import EditStock from "../components/EditStock";
import { useState } from "react";
import EditItem from "../components/EditItem";
import DeleteItem from "../components/DeleteItem";
import HeaderBar from "../components/HeaderBar";

export default function ItemView(){
    const {itemId} = useParams();
    const [isOpen, setIsOpen] = useState(false);
    const [view, setView] = useState('');
    const {data, isLoading} = useQuery({
        queryKey:['item', itemId],
        queryFn:getItem
    });
    const AddStock = modalHoc(EditStock);
    const UpdateItem = modalHoc(EditItem);
    const DeleteItemView = modalHoc(DeleteItem);
    const modals = {
        add:AddStock,
        reduce:AddStock,
        edit: UpdateItem,
        delete: DeleteItemView
    }
    const callSetIsOpen = (x)=>{
        setIsOpen(x);
    }
    const callSetView = (x)=>{
        setView(x);
    }
    const Modal = modals[view] || undefined;
    return(<>
    <HeaderBar/>
    <div className="w-75 mx-auto shadow-sm p-5 rounded mt-5">
        {!isLoading && <div className="d-flex">
            <div className="flex-grow-1">
            <div><strong>{data.itemName}</strong></div>
            <div className="my-3">Price : {data.price}</div>
            <div className="mt-3">Stock : {data.stock}</div>
            </div>
            <div className="d-flex flex-column text-primary justify-content-between">
                <button className="btn text-primary rounded-circle shadow-sm p-1" style={{
                    width:'40px',
                    height:'40px'
                }} onClick={()=>{
                    setIsOpen(true);
                    setView('add');
                }}>
                    <span className="material-symbols-rounded align-middle">add</span>
                </button>
                <button className="btn text-primary rounded-circle shadow-sm my-2 p-1" style={{
                    width:'40px',
                    height:'40px'
                }} onClick={()=>{
                    setIsOpen(true);
                    setView('reduce');
                }}>
                    <span className="material-symbols-rounded align-middle">remove</span>
                </button>
                <button className="btn text-primary rounded-circle shadow-sm my-2 p-1" style={{
                    width:'40px',
                    height:'40px'
                }} onClick={()=>{
                    setIsOpen(true);
                    setView('edit');
                }}>
                    <span className="material-symbols-rounded align-middle">edit</span>
                </button>
            </div>
            {isOpen && Modal && <Modal setIsOpen={callSetIsOpen} view={view} itemId={itemId} itemName={data.itemName} itemPrice={data.price} callSetView={callSetView}/>}
            </div>}
    </div></>);
}