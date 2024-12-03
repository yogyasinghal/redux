import React, { useState,useEffect } from "react";
import './Shopping.css'
import data from "../Data/data";
import { useDispatch } from "react-redux";
import {add,remove} from '../store/cartSlice';
import { useSelector } from 'react-redux';

import {addBook,removeBook,setBook} from '../store/dataSlice';

function Shopping(){

    const dispatch = useDispatch();
    // const newData = useSelector((state)=>state.data);
    let arr = useSelector((state)=>state.data).data;
    // console.log("newdata=",newData.data);
    // const [arr,setArr] = useState(newData.data);
    const [updateUi,setUpdateUi] = useState('');
    useEffect(()=>{
        console.log("useeffect");
        // setArr(newData.data)
    },[arr])

    console.log("arr",arr);
    const [title,setTitle] = useState('');
    const [author,setAuthor] = useState('');
    const [year,setYear] = useState('');
    
    const [language,setLanguage] = useState('');
    // const SortYear=(e)=>{
    //     e.preventDefault();
    //     const sorteddata=[...arr]
    //     .sort((a,b)=>Number(a.year)-Number(b.year))
   
    //   setArr(sorteddata);
    // }
    const SortName=(e)=>{
        e.preventDefault();
        console.log("sort name");
        const sorteddata=[...arr]
        .sort((a,b)=>a.title.localeCompare(b.title))
        // setArr(sorteddata);
        console.log("sorted",sorteddata);
        // arr = sorteddata;
        dispatch(setBook(sorteddata))
        // console.log(arr);
    
    }
    // const SortAuthor=(e)=>{
    //     e.preventDefault();
    //     const sorteddata=[...arr]
    //     .sort((a,b)=>a.author.localeCompare(b.author))
    //     setArr(sorteddata);
    
    // }
    // const handleChange=(e)=>{
    //     e.preventDefault();
    //     console.log(e.target.value);
    //     let tempdata = data.filter(
    //         (item)=>item.title.toLowerCase().match(e.target.value.toLowerCase())
    //     )
    //     setArr(tempdata);

    // }
    const handleAdd = (book)=>{
        dispatch(add(book));
    }
    const handleDelete = (book)=>{
        dispatch(remove(book))
    }
    const addItem = ()=>{
        let temp = {
            title:title,
            author:author,
            language:language,
            year:year
        }
        dispatch(addBook(temp))
        setUpdateUi('a');
        // console.log("additem",title,author,year,language);
    }
    return(
        <div>

             {/* <h1>Contact Manager</h1> */}
            <h1 className="text-primary d-flex justify-content-center m-4">Add Book</h1>
            <form className="row mx-4 d-flex justify-content-center align-items-center">
                <div className="col-sm-6 col-md-3  form-group p-2">
                    <input onChange={(e)=>setTitle(e.target.value)} type="text" className="form-control"  aria-describedby="emailHelp" placeholder="Enter Name"></input>
                </div>
                <div className="col-sm-6 col-md-3  form-group p-2">
                    <input onChange={(e)=>setAuthor(e.target.value)} type="email" className="form-control"  aria-describedby="emailHelp" placeholder="Enter Email"></input>
                </div>
                <div className="col-sm-6 col-md-3  form-group p-2">
                    <input onChange={(e)=>setYear(e.target.value)} type="text" className="form-control"  placeholder="Enter Phone"></input>
                </div>
                <div className="col-sm-6 col-md-3  form-group p-2">
                    <input onChange={(e)=>setLanguage(e.target.value)} type="text" className="form-control"  placeholder="Enter City"></input>
                </div>
                
               
            </form>
            <button
                onClick={(e)=>addItem(e)}
                type="submit" className="btn btn-primary m-2">Submit</button>    
           
            <h1 id="e1" className="text-primary d-flex justify-content-center m-4" >Shopping</h1>
            <form className="d-flex justify-content-center g-2 align-items-center">
                    <div className="form-group mx-5">
                        {/* <input type="text" onChange={(e)=>handleChange(e)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Author name"></input> */}
                    </div>
                    <div className="d-flex">
                    <h4 className="m-2"> Sort By: </h4>
                   
                    <button className="btn btn-primary m-2" onClick={(e)=>SortName(e)}>Title </button>
                     {/* <button className="btn btn-primary m-2" onClick={(e)=>SortYear(e)}>Year</button> */}
                     {/* <button className="btn btn-primary m-2" onClick={(e)=>SortAuthor(e)}>Author</button> */}
                     </div>
                    
                    {/* <button type="submit" className="btn btn-primary m-2">Submit</button> */}
                </form>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-5 p-4 mx-3 justify-content-evenly ">
            {
            arr.map((item)=>(
            <div className="col">
            <div className="card bg-light  p-1" id="cm1">
               
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <h6 className="card-title">{item.author}</h6>
                  <p className="card-text">{item.language}</p>
                  <p className="card-text">{item.year}</p>
                    <button onClick={()=>handleAdd(item)} className="btn btn-primary" >Add Book</button>
                    0
                    <button onClick={()=>handleDelete(item)} className="btn btn-primary" >Delete Book</button>

                </div>
            </div>
            </div>
            ))}
            </div>

        </div>
    )
}
export default Shopping;