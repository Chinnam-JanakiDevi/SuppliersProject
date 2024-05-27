import './AUNavbar.css';
import { Link } from "react-router-dom"

const AUNavbar = () => {
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
                    <li><Link to="/AHome">Home</Link></li>
                    <li><Link to="/Home">Details</Link></li>
                    <li><Link to="/Home">AllEvents</Link></li>
                    <li><Link to="/Home">OnlineBooked</Link></li>
                    <li><Link to="/" className="login">LogOut</Link></li>
                </ul>
            </nav>
        </>
    )
}
export default AUNavbar