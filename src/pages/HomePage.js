import ItemsList from "../components/ItemsList";
import { useNavigate } from "react-router-dom";
import HeaderBar from "../components/HeaderBar";

export default function Home(){
    const navigate = useNavigate();
    return(<>
        <HeaderBar/>
        <div style={{
            padding:'50px 50px 50px 50px',
        }}>
        <button className="btn btn-primary mx-auto position-fixed d-flex justify-content-center" style={{
            width:'50px',
            right:'50px',
            bottom:'80px'
        }} onClick={()=>{
            navigate('/add-item');
        }}><span className="material-symbols-rounded">add</span></button>
        <ItemsList/>
        </div>
    </>)
}