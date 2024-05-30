import { useState } from "react"
import "./Login.css"
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios'
import Navbar from "../navbar/Navbar"

const Login = () => {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [isSuccess, setIsSuccess] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault()
        console.log(email, password);
        try {
            const response = await axios.post('https://suppliers-projectbackend.vercel.app/login', { email, password });
            console.log(response.data);
            setIsSuccess(true);
            setShowPopup(true)
            if (email === "ja@gmail.com" || email === "mani@gmail.com") {
                setTimeout(() => {
                    navigate('/AdminView', { state: { data:email, name: "devi" } });

                }, 3000);
            }
            else {
                setTimeout(() => {
                    navigate('/UserView', { state: { data: "janaki", name: "devi" } });

                }, 3000);
            }
        }
        catch (error) {
            // console.log("error occured");
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
                        Login Success!
                    </div>
                </div> :
                <div className="popup-backdrop">
                    <div className="popup">
                        Incorrect email or password
                    </div>
                </div>
            )}
            <div className="LoginForm">
                <div className="Lcontainer">
                    <form onSubmit={handleLogin}>
                        <input type="email" placeholder="email" value={email} onChange={(e) => setemail(e.target.value)}></input>
                        <input type="password" placeholder="password" value={password} onChange={(e) => setpassword(e.target.value)}></input><br></br>
                        <input type="submit" value="Login" ></input>
                        <p className="p">Already has an account <b><Link to="/Register" className="no-underline">Register</Link></b></p>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Login
