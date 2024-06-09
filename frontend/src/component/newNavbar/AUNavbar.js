import './AUNavbar.css';
import { Link, useNavigate ,useLocation} from "react-router-dom";

const AUNavbar = () => {
    const location = useLocation();
    const { data } = location.state || {};
    console.log("in nav data",data);
    const navigate = useNavigate();

    const handleMyDetailsClick = () => {
        navigate('/MyDetails', { state: { data:data } });
    };

    return (
        <>
            <nav>
                <input type="checkbox" id="check" />
                <label htmlFor="check" className="checkbtn">
                    <i className="fas fa-bars"></i>
                    <i className="fas fa-times"></i>
                </label>
                <label className="logo">{data}</label>
                <ul>
                    <li><Link to="/UHome">Home</Link></li>
                    <li onClick={handleMyDetailsClick}><Link>MyDetails</Link></li>
                    <li><Link to="/UserEvents">AllEvents</Link></li>
                    <li><Link to="/" className="login">LogOut</Link></li>
                </ul>
            </nav>
        </>
    );
};

export default AUNavbar;



// import './AUNavbar.css';
// import { Link } from "react-router-dom"
// import { useLocation } from "react-router-dom";
// import { MyDetails } from '../myDetails/MyDetails';

// const AUNavbar = () => {
//     const location = useLocation();
//     const { data } = location.state || {};
//     return (
//         <>
//             <nav>
//                 <input type="checkbox" id="check"></input>
//                 <label htmlFor="check" className="checkbtn">
//                     <i className="fas fa-bars"></i>
//                     <i className="fas fa-times"></i>
//                 </label>
//                 <label className="logo">{data}</label>
//                 <ul>
//                     <li><Link to="/UHome">Home</Link></li>
//                     <li><Link to="/MyDetails">MyDetails</Link></li>
//                     <li><Link to="/UserEvents">AllEvents</Link></li>
//                     {/* <li><Link to="/UHome">OnlineBooked</Link></li> */}
//                     <li><Link to="/" className="login">LogOut</Link></li>
//                 </ul>
//             </nav>
//         </>
//     )
// }
// export default AUNavbar