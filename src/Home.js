import {Link,NavLink,Route,Routes} from 'react-router-dom';

function Home() {
    return (
      <div className='App'>
        {/* hello Home */}
        <h1>Book store</h1>
        <div className = "justify-content-evenly m-4 p-2" style = {{display:"flex"}}>
        
        <Link className='btn btn-dark ' to='/login'>Login</Link>
        <Link className='btn btn-dark ' to='/signup'>Signup</Link>
        
        </div>
        {/* <Signup></Signup> */}
        
      </div>
    );
  }
  
  export default Home;