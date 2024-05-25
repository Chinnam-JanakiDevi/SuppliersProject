// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Navbar from './component/navbar/Navbar';
import Home from './component/home/Home';
import Login from './component/login/Login';
import Register from './component/signup/signup';
import UserView from './component/userDashboard/userview';
import AdminView from './component/adminDashboard/adminview';
import AUNavbar from './component/newNavbar/AUNavbar';

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route exact path="/" element={<Navbar />} />
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Register" element={<Register />} />
        <Route exact path="/UserView" element={<UserView />} />
        <Route exact path="/AdminView" element={<AdminView />} />
        <Route exact path="/AUNavbar" element={<AUNavbar />} />
      </Routes>
    </>
  );
}

export default App;
