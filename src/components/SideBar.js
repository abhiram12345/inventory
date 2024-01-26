import { Link, NavLink } from "react-router-dom";

export default function SideBar(){
    return(
        <div className='bg-dark vh-100 text-light p-5' style={{
            flexBasis:'300px'
        }}>
        <div class="material-symbols-rounded">deployed_code</div>
        <div className="my-2"><NavLink to='/' style={({isActive})=>({color: isActive ? 'white' : '#E0E0E0'})}>Items</NavLink></div>
        <div className="my-2"><NavLink to='manage' style={({isActive})=>({color: isActive ? 'white' : '#E0E0E0'})}>Manage Items</NavLink></div>
        </div>
    )
}