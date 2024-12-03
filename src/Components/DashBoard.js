import React from "react";
import { useEffect, useState } from "react";
import { Link,useParams } from "react-router-dom";
import data from "../Data/data";
function DashBoard(){
    let {name}  = useParams();
    const [arr,setArr] = useState(data);
    const [wish,setWish] = useState(data);
    useEffect(()=>{
        let tempdata = data.filter(
            (item)=>item.language.toLowerCase().match("arabic")
        )
        let tempdata2 = data.filter(
            (item)=>item.language.toLowerCase().match("chinese")
        )
        setWish(tempdata2)
        setArr(tempdata);
    },[])
    
    // console.log(name);
    return(
        <div >
           <h1 id="e1" className="text-primary d-flex justify-content-center m-4" >Dashboard</h1>
           
            <div className="d-grid justify-content-center">
                <h1>Welcome {name}</h1>
                
                <h2> phone - 123456789 </h2>
                <h2> address - india</h2>
                <h2 className="m-4 text-danger">
                    Wishlist </h2>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-5 p-4 mx-3 justify-content-evenly ">
                {
                wish.map((item)=>(
                <div class="col">
                <div className="card bg-light  p-1" id="cm1">
                
                    <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <h6 className="card-title">{item.author}</h6>
                    <p className="card-text">{item.language}</p>
                    <p className="card-text">{item.year}</p>
                    
                    
                    </div>
                </div>
                </div>
                ))}
            </div>
                <h2 className="m-4 text-warning"> Recently viewed Books</h2>
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
                    
                    
                    </div>
                </div>
                </div>
                ))}
            </div>
           <div className="d-flex justify-content-center">
           <Link className='btn btn-primary m-2 w-25' to='/shopping'>Go To Shopping</Link>
           </div>
            </div>
        
        </div>
    )
}
export default DashBoard;