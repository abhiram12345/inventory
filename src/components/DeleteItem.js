import { useMutation } from "react-query"
import { deleteItem } from "../queries/mutations";
import { useNavigate } from "react-router-dom";

export default function DeleteItem({itemId, setIsOpen}){
    const navigate = useNavigate();
    const mutation = useMutation({
        mutationFn: deleteItem,
        onSuccess: ()=>{
            navigate('/');
        }
    });
    return(<div>
        <p>Are you sure deleting the item?</p>
        <div className="d-flex w-100 justify-content-around mt-4">
        <button className="btn btn-light" onClick={()=>{
            setIsOpen(false);
        }}>Cancel</button>
        <button className="btn btn-danger" onClick={()=>{
            mutation.mutateAsync(itemId);
        }}>Delete</button>
        </div>
    </div>)
}