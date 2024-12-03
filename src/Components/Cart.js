import React, { useState } from "react";
import './Shopping.css';
import { useDispatch } from "react-redux";
import {remove} from '../store/cartSlice';
import { useSelector } from 'react-redux';
// import data from "../Data/data";
function Cart(){
    const arr = useSelector((state)=>state.cart);
    console.log("arr",arr);
    const name = useSelector((state)=>state.name);
    const dispatch = useDispatch();
    
    const handleDelete=(book)=>{
        console.log("delete ",book);
        dispatch(remove(book));
    }
    
    return(
        <div>
             
           {name}
            <h1 id="e1" className="text-primary d-flex justify-content-center m-4" >Welcome {name} to your Cart</h1>
           
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-5 p-4 mx-3 justify-content-evenly ">
            {
            arr.map((item)=>(
            <div class="col">
            <div className="card bg-light  p-1" id="cm1">
               
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <h6 className="card-title">{item.author}</h6>
                  <p className="card-text">{item.language}</p>
                  <p className="card-text">{item.year}</p>
                   <button onClick={()=>handleDelete(item)}>Delete item</button>
                
                </div>
            </div>
            </div>
            ))}
            </div>

        </div>
    )
}
export default Cart;