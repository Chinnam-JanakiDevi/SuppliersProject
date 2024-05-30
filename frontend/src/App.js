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
        <Route exact path='/Uniforms' element={<Uniforms />} />
        <Route exact path='/AUniforms' element={<AUniforms />} />
        <Route exact path='/AdminNav' element={<AdminNav />} />
        <Route exact path='/UsersList' element={<UsersList />} />
        <Route exact path='/OnlineBook' element={<OnlineBook />} />
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
