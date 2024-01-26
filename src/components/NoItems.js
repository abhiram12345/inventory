import diceImg from "../dice.png";

export default function NoItems(){
    return(
        <div className="position-absolute" style={{
            left:'50%',
            top:'50%',
            transform: 'translate(-50%, -50%)'
        }}>
            <img src={diceImg} height='100' width='160' alt='cat'/>
            <p className="mt-2" style={{color:'#303030'}}>No items</p>
        </div>)
}