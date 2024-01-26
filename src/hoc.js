export default function modalHoc(Component){
    function Modal({setIsOpen, ...props}){
        return(<>
        <div className="my-modal-backdrop"></div>
            <div className="my-modal w-25">
                <Component setIsOpen={setIsOpen} {...props}/>
                <button type="button" className="btn-close position-absolute" aria-label="Close" onClick={()=>{setIsOpen(false)}} style={{top:'20px', right:'20px'}}></button>
            </div></>);
    }
    return Modal;
}