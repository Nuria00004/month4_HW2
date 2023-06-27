import {useState} from "react";

const Products =({item})=>{

    const [count,setCount]=useState(0)
    console.log(count)
    return( <div >
        <h1>{item.product}</h1>
        <img src={item.img} alt=""/>
        <p>{item.price}</p>
        <button>{item.btn}</button>
        <span>{count}</span>
        <button onClick={()=>setCount(count+1)}>+</button>
    </div>)
}
export default Products