import { NavLink } from "react-router-dom";

export default function DropDown(){
    return(<div className="pop-over">
    <div className="my-2"><NavLink to='/' style={({isActive})=>({color: isActive ? '#303030' : 'gray'})}>Items</NavLink></div>
    <div className="my-2"><NavLink to='manage' style={({isActive})=>({color: isActive ? '#303030' : 'gray'})}>Manage Items</NavLink></div>
    </div>);
}