import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useNavigate, useSearchParams } from "react-router-dom"
import DropDown from "./DropDown";

export default function HeaderBar(){
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [searchTerm, setSearchTerm] = useState(searchParams.get('name') ?? '');
    const isMobileScreen = useMediaQuery({
        query:'(max-width:1224px)'
    });
    const [isDropDown, setDropDown] = useState(false);
    return(<>
    <header className="position-sticky w-100 p-3 shadow-sm d-flex align-items-center justify-content-between" style={{
        top:0,
        left:0,
        zIndex:1,
        backgroundColor:'white'
    }}>
        <div className="d-flex align-items-center">
        <div style={{
            height:'40px',
            boxSizing:'border-box',
            borderBottom:'1px solid #303030'
        }}>
        <input type="text" placeholder="Search shelf" value={searchTerm} className="border-0 h-100" style={{
            outline:'none'
        }} onChange={(e)=>{
            setSearchTerm(e.target.value);
        }}/>
        </div>
        <button className="border-0 p-2 ms-2" style={{
            height:'40px',
            boxSizing:'border-box',
            overflow:'hidden'
        }} onClick={()=>{
            navigate(`/?name=${searchTerm || ''}`);
        }}>
        <span className="material-symbols-rounded">search</span>
        </button>
        </div>
        {isMobileScreen && <div>
            <button className="me-3" style={{
                border:'none',
                backgroundColor:'transparent'
            }} onClick={()=>{
                setDropDown(state=> !state);
            }}><span className="material-symbols-rounded">{isDropDown ? 'close' : 'more_vert'}</span></button>
            <span className="material-symbols-rounded">deployed_code</span>
        </div>}
        {isDropDown && <DropDown/>}
    </header>
    </>)
}