import React, { Component }  from 'react';
import {Link,NavLink,Route,Routes} from 'react-router-dom'

import { useSelector } from 'react-redux';

const NavBar=()=>{
    const items = useSelector((state)=>state.cart);
    return(
        <>
        
    <nav 
        className="navbar navbar-expand-lg navbar-light bg-light"
        style = {{padding:"20px"}}
    >
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" 
    id="navbarSupportedContent"
    style={{
        backgroundColor:"aquamarine",
        width: "100%",
        justifyContent: "space-between"

    }}
      >
        <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
        <NavLink to='/'>
        {
            ({isActive})=>(
                <button className={isActive?'btn btn-none border-0 text-primary':'btn btn-none border-0'}>Home</button>
            )
        }
      </NavLink>
            {/* <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a> */}
        </li>
        <li className="nav-item">
        <NavLink to='/signup'>
        {
            ({isActive})=>(
                <button className={isActive?'btn btn-none border-0 text-primary':'btn btn-none border-0'}>Signup</button>
            )
        }
      </NavLink>
            {/* <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a> */}
        </li>
        <li className="nav-item">
        <NavLink to='/login'>
        {
            ({isActive})=>(
                <button className={isActive?'btn btn-none border-0 text-primary':'btn btn-none border-0'}>Login</button>
            )
        }
      </NavLink>
      <NavLink to='/cart'>
        {
            ({isActive})=>(
                <button className={isActive?'btn btn-none border-0 text-primary':'btn btn-none border-0'}>Cart {items.length}</button>
            )
        }
      </NavLink>
            {/* <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a> */}
        </li>
        <li className="nav-item">
        {/* <NavLink to='/image' style={({isActive})=>(
        {color:isActive?'red':'blue'}
      )}> Navlink

      </NavLink> */}

<NavLink to='/dashboard'>
      {
        ({isActive})=>(
          <button className={isActive?'btn btn-none text-primary border-0':'btn btn-none border-0'}>DashBoard</button>
        )
      }
      </NavLink>

<NavLink to='/shopping'>
      {
        ({isActive})=>(
          <button className={isActive?'btn btn-none text-primary border-0':'btn btn-none border-0'}>Shopping</button>
        )
      }
      </NavLink>


        {/* <Link className='btn btn-none' to='/contactManager'>Contact Manager</Link> */}
        {/* <NavLink 
            to = '/router'
            // style={{backgroundColor:"blue"}}
            style={isActive => ({color:isActive?'red':'yellow'})}
            >
                Go to router
        </NavLink> */}
            {/* <a className="nav-link" href="#">Link</a> */}
        </li>
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Something else here</a>
            </div>
        </li>
        <li className="nav-item">
            <a className="nav-link disabled" href="#">Disabled</a>
        </li>
        </ul>
        <form className="form-inline my-2 my-lg-0"
        style={{
            display: "flex",
            width: "40%",
            marginRight: "1%"
        }}
        >
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
    </div>
    </nav>
        </>
    )
}
export default NavBar;