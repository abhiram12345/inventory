import { useMutation } from "react-query";
import { deleteAllItems } from "../queries/mutations";
import { useNavigate } from "react-router-dom";
import HeaderBar from "../components/HeaderBar";
import { toast } from "react-toastify";

export default function ManageItems(){
    const navigate = useNavigate();
    const mutate = useMutation({
        mutationFn:deleteAllItems,
        onSuccess: ()=>{
            navigate('/');
            toast('All items deleted successfully', {
                position:'bottom-right',
                autoClose:'4000',
                type:'success'
            })
        }
    })
    return(<>
    <HeaderBar/>
    <div className="d-flex h-100 justify-content-center align-items-center">
        <button className="btn btn-danger p-4 rounded d-flex align-items-center" onClick={()=>{
            if(window.confirm('This action will delete all items. Are sure to proceed?')){
                mutate.mutateAsync();
            }
        }}>
            <span>Delete all items</span>
            <span className="material-symbols-rounded justify-content-center ms-2">delete</span>
        </button>
    </div></>);
}