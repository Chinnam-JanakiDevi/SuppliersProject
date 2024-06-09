import { useState } from "react"
import NavigationBar from "../navbar/Navbar"
import './onlinebooking.css'
import axios from "axios";

export const OnlineBook = () => {
    const [name,setname] = useState("")
    const [eventname,seteventname] = useState("")
    const [contact,setcontact] = useState("")
    const [message,setmessage] = useState("")
    const handleInsert=async(e)=>{
        e.preventDefault()
        try{
            const response =await axios.post("https://suppliers-projectbackend.vercel.app/booking",{name,eventname,contact,message})
            console.log(response.data);
        }
        catch(error){
            console.log(error);
        }
    }
    return (
        <>
            <NavigationBar />
            <div>
                <form className="bookForm" onSubmit={handleInsert}>
                    <table>
                        <tr>
                            <td>name</td>
                            <td><input type="text" placeholder="enter your name" onChange={(e)=>setname(e.target.value)}></input></td>
                        </tr>
                        {/* <tr>
                            <td>email</td>
                            <td><input type="text" placeholder="Email"></input></td>
                        </tr> */}
                        <tr>
                            <td>Event Type</td>
                            <td><input type="text" placeholder="Event Name" onChange={(e)=>seteventname(e.target.value)}></input></td>
                        </tr>
                        <tr>
                            <td>Contact number</td>
                            <td><input type="text" placeholder="Contact" onChange={(e)=>setcontact(e.target.value)}></input></td>
                        </tr>
                        
                        <tr>
                            <td>message</td>
                            <td><input type="text" placeholder="Message" onChange={(e)=>setmessage(e.target.value)}></input></td>
                            {/* <td><textarea rows="5" type="text" placeholder="Message"></textarea></td> */}
                        </tr>
                        <tr>
                            <td><input type="submit" value="submit"></input></td>
                            <td><input type="reset" value="reset"></input></td>
                        </tr>
                    </table>
                </form>
            </div>
        </>
    )
}