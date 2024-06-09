import { useEffect, useState } from "react"
import NavigationBar from "../navbar/Navbar"
import './onlinebooking.css'
import axios from "axios";
import AdminNav from "../adminNavbar/adminNav";

export const OnlineBook = () => {
    const [name, setname] = useState("")
    const [eventname, seteventname] = useState("")
    const [contact, setcontact] = useState("")
    const [message, setmessage] = useState("")
    const handleInsert = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post("https://suppliers-projectbackend.vercel.app/booking", { name, eventname, contact, message })
            console.log(response.data);
        }
        catch (error) {
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
                            <td><input type="text" placeholder="enter your name" onChange={(e) => setname(e.target.value)}></input></td>
                        </tr>
                        {/* <tr>
                            <td>email</td>
                            <td><input type="text" placeholder="Email"></input></td>
                        </tr> */}
                        <tr>
                            <td>Event Type</td>
                            <td><input type="text" placeholder="Event Name" onChange={(e) => seteventname(e.target.value)}></input></td>
                        </tr>
                        <tr>
                            <td>Contact number</td>
                            <td><input type="text" placeholder="Contact" onChange={(e) => setcontact(e.target.value)}></input></td>
                        </tr>

                        <tr>
                            <td>message</td>
                            <td><input type="text" placeholder="Message" onChange={(e) => setmessage(e.target.value)}></input></td>
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

export const OnlineBooked = () => {
    const [list, setlist] = useState([])
    useEffect(() => {
        const fetchOnlineBookedList = async () => {
            const response = await axios.post("https://suppliers-projectbackend.vercel.app/onlineBookedList")
            setlist(response.data.data)
        }
        fetchOnlineBookedList()
    }, [])
    return (
        <>
            <AdminNav />
            <table className="tbl">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Event</th>
                        <th>Contact</th>
                        <th>Message</th>
                    </tr>
                </thead>
                <tbody>
                    {list.length > 0 ? (
                        list.map((list, index) => (
                            <tr key={index}>
                                <td>{list.name}</td>
                                <td>{list.eventname}</td>
                                <td>{list.contact}</td>
                                <td>{list.message}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4">No users found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    )
}
