import { useMediaQuery } from "react-responsive";

export default function modalHoc(Component){
    function Modal({setIsOpen, ...props}){
        const isDesktopScreen = useMediaQuery({
            query:'(min-width:1224px)'
        });
        return(<>
        <div className="my-modal-backdrop"></div>
            <div className={`my-modal ${isDesktopScreen ? 'w-25' : 'w-75'}`}>
                <Component setIsOpen={setIsOpen} {...props}/>
                <button type="button" className="btn-close position-absolute" aria-label="Close" onClick={()=>{setIsOpen(false)}} style={{top:'20px', right:'20px'}}></button>
            </div></>);
    }
    return Modal;
}