import { Outlet } from "react-router-dom";
import {useMediaQuery} from 'react-responsive';
import SideBar from "./SideBar";

export default function Main(){
    const isDesktopScreen = useMediaQuery({query:'(min-width:1224px)'});
    return(<div className="d-flex justify-content-between">
    {isDesktopScreen &&  <SideBar/>}
    <div className="flex-grow-1 position-relative" style={{
        height:'100vh',
        overflow:'scroll'
    }}>
    <Outlet/>
    </div>
    </div>)
}