import { useState } from "react"
import "./signup.css"
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios'
import Navbar from "../navbar/Navbar"

const Register = () => {
    const [name, setname] = useState("");
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    // const [message, setmessage] = useState("")
    const [isSuccess, setIsSuccess] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    const navigate = useNavigate();

    const handleInsert = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('https://suppliers-projectbackend.vercel.app/users', { name, email, password });
            console.log(response.data);
            // setmessage(response.data.message)
            console.log(response.data.message);
            setIsSuccess(true);
            setShowPopup(true)
            setTimeout(() => {
                navigate('/Login');
            }, 3000);
        }
        catch (error) {
            console.log("error occured");
            setShowPopup(true)
            setIsSuccess(false);
            setTimeout(() => {
                setShowPopup(false);
            }, 2500);

        }
    }
    return (
        <>
        <Navbar />
            {showPopup && (isSuccess ?
                <div className="popup-backdrop">
                    <div className="popup">
                        Registered successfully! Please login.
                    </div>
                </div> :
                <div className="popup-backdrop">
                    <div className="popup">
                        Not Registered successfully due to email already exists
                    </div>
                </div>
            )}
            {/* {message && (isSuccess ? <p>successs</p> : <p>not registered</p>)} */}
            <div className="RegisterForm">
                <div className="Rcontainer">
                    <form onSubmit={handleInsert}>
                        <input type="text" placeholder="Name" value={name} onChange={(e) => setname(e.target.value)}></input>
                        <input type="email" placeholder="email" value={email} onChange={(e) => setemail(e.target.value)}></input>
                        <input type="password" placeholder="password" value={password} onChange={(e) => setpassword(e.target.value)}></input><br></br>
                        <input type="submit" value="Register" ></input>
                        <p className="p">Already has an account <b><Link to="/Login" className="no-underline">Login</Link></b></p>
                    </form>

                </div>
            </div>
        </>
    )
}
export default Register
