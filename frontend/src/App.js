// import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom"
import Home from './component/home/Home';
import Login from './component/login/Login';
import Register from './component/signup/signup';
import UserView from './component/userDashboard/userview';
import AdminView from './component/adminDashboard/adminview';
import AUNavbar from './component/newNavbar/AUNavbar';
import { AHome } from './component/home/Home';
import NavigationBar from './component/navbar/Navbar';
import { Uniforms } from './component/uniforms/Uniforms';
import AdminNav from './component/adminNavbar/adminNav';
import { AUniforms } from './component/uniforms/Uniforms';
import { UsersList } from './component/usersList/usersList';
import { OnlineBook } from './component/booking/onlinebooking';
import { Gallery } from './component/gallery/Gallery';
import { Events } from './component/gallery/Gallery';
import { UHome } from './component/home/Home';
import { MyDetails } from './component/myDetails/MyDetails';
import { UserEvents } from './component/myDetails/MyDetails';

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route exact path="/" element={<NavigationBar />} />
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Register" element={<Register />} />
        <Route exact path="/UserView" element={<UserView />} />
        <Route exact path="/AdminView" element={<AdminView />} />
        <Route exact path="/AUNavbar" element={<AUNavbar />} />
        <Route exact path='/AHome' element={<AHome />} />
        <Route exact path='/UHome' element={<UHome />} />
        <Route exact path='/Uniforms' element={<Uniforms />} />
        <Route exact path='/AUniforms' element={<AUniforms />} />
        <Route exact path='/AdminNav' element={<AdminNav />} />
        <Route exact path='/UsersList' element={<UsersList />} />
        <Route exact path='/OnlineBook' element={<OnlineBook />} />
        <Route exact path='/Gallery' element={<Gallery />} />
        <Route exact path='/UserEvents' element={<UserEvents />} />        
        <Route exact path='/MyDetails' element={<MyDetails />} />
        <Route exact path='/Events' element={<Events />} />
      </Routes>
      <footer>
        <div className='foot'>
          <div>
            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga commodi, atque aperiam ea temporibus necessitatibus aspernatur ducimus omnis iste. Dignissimos minus assumenda et impedit ipsa sapiente sit quis harum accusantium!</p> */}
            <p>This is my portfolio providing all the details about my Education,Skills,Projects done by me..</p>
            <a href="mailto:chinnam.janakidevi123@gmail.com" className="btn">Email Me</a>
          </div>
          <div className='ullist'>
            <li><Link to="/AHome">Home</Link></li>
            <li><Link to="/Home">Details</Link></li>
            <li><Link to="/Home">AllEvents</Link></li>
            <li><Link to="/Home">OnlineBooked</Link></li>
          </div>
          {/* <div>
            <li><Link to="/AHome">Home</Link></li>
            <li><Link to="/Home">Details</Link></li>
            <li><Link to="/Home">AllEvents</Link></li>
            <li><Link to="/Home">OnlineBooked</Link></li>
          </div> */}
        </div>
        <div class='cr-con'>Copyright &copy; 2024 | Made by Janaki Devi</div>
      </footer>
    </>
  );
}

export default App;
