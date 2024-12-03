
import './App.css';
import {Link,NavLink,Route,Routes} from 'react-router-dom';
import Signup from './Validations/Signup';
import Login from './Validations/Login';
import Home from './Home';
import DashBoard from './Components/DashBoard';
import Shopping from './Components/Shopping';
import NavBar from './Navbar';
import { Provider } from 'react-redux';
import store from './store/store';
import Cart from './Components/Cart';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <NavBar></NavBar>
      {/* hello app */}
      {/* <div className = "justify-content-evenly m-4 p-2" style = {{display:"flex"}}>
      <Link className='btn btn-dark text-danger' to='/login'>Login</Link>
      <Link className='btn btn-dark text-info' to='/signup'>Signup</Link>
      
      </div> */}
      {/* <Signup></Signup> */}
      <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path = '/signup' element={<Signup></Signup>}></Route>
      <Route path ='/login' element = {<Login></Login>}></Route>
      <Route path ='/dashboard/' element = {<DashBoard></DashBoard>}></Route>
      <Route path ='/dashboard/:name' element = {<DashBoard></DashBoard>}></Route>
      <Route path ='/shopping' element = {<Shopping></Shopping>}></Route>
      <Route path = '/cart' element={<Cart></Cart>}></Route>
      </Routes>

      </Provider>
    </div>
  );
}

export default App;
