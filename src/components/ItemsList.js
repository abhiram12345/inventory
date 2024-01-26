import { useNavigate, useSearchParams } from "react-router-dom";
import {useInView} from 'react-intersection-observer';
import { useInfiniteQuery } from "react-query";
import { getInfiniteItems } from "../queries/queries";
import { useEffect } from "react";
import NoItems from "./NoItems";

function ItemCard({itemId, itemName, price, stock}){
    const navigate = useNavigate();
    return(<div className="shadow-sm px-5 py-3 mb-4" style={{
        color:'#303030'
    }} onClick={()=>{
        navigate(`item/${itemId}`);
    }}>
        <div className="text-primary"><b>{itemName}</b></div>
        <div className="my-2">price : {price}</div>
        <div className="my-2">stock : {stock}</div>
    </div>)
}

export default function ItemsList(){
    const [ref, inView] = useInView();
    const [searchParams] = useSearchParams();
    const {data, status, fetchNextPage, hasNextPage} = useInfiniteQuery({
        queryKey : ['items', searchParams.get('name') || ''], 
        queryFn : getInfiniteItems,
        getNextPageParam : (lastPage)=> lastPage.length > 0 ? lastPage[lastPage.length-1].id : undefined
    });
    useEffect(()=>{
        if(inView){
            fetchNextPage();
        }
    }, [inView]);
    return(<>
    {
        status === 'loading' ? 'loading' : data.pages.map((group, index)=><>{
            group.length === 0 && index === 0  ? <NoItems/> :
            group.map((item)=> <ItemCard itemName={item.itemName} price={item.price} stock={item.stock} itemId={item.id}/>)
        }</>)
    }
    {hasNextPage && <div ref={ref} className="p-3"></div>}
    </>)
}