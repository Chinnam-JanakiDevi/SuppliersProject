import './Navbar.css';
import { Link } from "react-router-dom"


const Navbar = () => {
    return (
        <>
            <nav>
                <input type="checkbox" id="check"></input>
                <label htmlFor="check" className="checkbtn">
                    <i className="fas fa-bars"></i>
                    <i className="fas fa-times"></i>
                </label>
                <label className="logo">Suppliers</label>
                <ul>
                    <li><Link to="/Home">Home</Link></li>
                    <li><Link to="/Login">Uniforms</Link></li>
                    <li><Link to="/Home">Events</Link></li>
                    <li><Link to="/Gallery">Gallery</Link></li>
                    <li><Link to="/Register" className="login">Sign Up/In</Link></li>
                </ul>
            </nav>
        </>
    )
}
export default Navbar