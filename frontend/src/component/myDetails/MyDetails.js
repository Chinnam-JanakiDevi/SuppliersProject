import { useState, useEffect } from "react";
import AUNavbar from "../newNavbar/AUNavbar";
import './MyDetails.css';
import { useLocation } from "react-router-dom";
import axios from "axios";

export const MyDetails = () => {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}-${month}-${year}`;

    const location = useLocation();
    const { data } = location.state || {};
    console.log(data);

    const [name, setName] = useState("");
    const [email, setEmail] = useState(data || "");
    const [placeORcollege, setPlaceORcollege] = useState("");
    const [contact, setContact] = useState("");
    const [amount, setAmount] = useState("");
    const [freeToday, setFreeToday] = useState("False");
    const [showFreeToday, setShowFreeToday] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [showUpdateForm, setShowUpdateForm] = useState(false);
    const [showupdated, setshowupdated] = useState(false);
    const [showdetails, setshowdetails] = useState(false);

    useEffect(() => {
        const checkUser = async () => {
            try {
                // console.log("hello ",data);
                const response = await axios.post('https://suppliers-projectbackend.vercel.app/checkuser', { email: data });
                console.log(response.data);
                if (response.data.data === 'Email already exists') {
                    setName(response.data.details.name);
                    setEmail(response.data.details.email);
                    setPlaceORcollege(response.data.details.placeORcollege);
                    setContact(response.data.details.contact);
                    setAmount(response.data.details.amount);
                    setFreeToday(response.data.details.freeToday);
                    setShowFreeToday(true);
                    setShowForm(false);

                } else {
                    // setName(response.data.details.name);
                    // setEmail(response.data.details.email);
                    // setPlaceORcollege(response.data.details.placeORcollege);
                    // setContact(response.data.details.contact);
                    // setAmount(response.data.details.amount);
                    // setFreeToday(response.data.details.freeToday);
                    setShowFreeToday(false);
                    setShowForm(true);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        checkUser();
    }, [data]); // Add data as a dependency

    const handleInsert = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://suppliers-projectbackend.vercel.app/userdetails', { name, data, placeORcollege, contact, amount, freeToday });
            console.log(response.data);
            if (response.data.data === 'updated') {
                setshowupdated(true);
                setTimeout(() => setshowupdated(false), 2000)
                setShowUpdateForm(false)
            }
        } catch (error) {
            console.log("error occurred");
        }
    };
    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://suppliers-projectbackend.vercel.app/userdetails', { name, data, placeORcollege, contact, amount, freeToday });
            console.log(response.data);
            setshowupdated(true);
            // Hide the update notification after 3 seconds
            setTimeout(() => setshowupdated(false), 3000);
        } catch (error) {
            console.log("error occurred");
        }
    };

    const showDetails = () => {
        setshowdetails(true)
        // setTimeout(setshowdetails(false), 30000)
    }
    return (
        <>
            <AUNavbar />
            {showupdated && (<p className="up"><b>Updated Succeesfully</b></p>)}
            {(showForm || showUpdateForm) && (
                <div>
                    <form className="detailsForm" onSubmit={handleInsert}>
                        <table>
                            <tr>
                                <td>Name</td>
                                <td>
                                    <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
                                </td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>
                                    <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} disabled />
                                </td>
                            </tr>
                            <tr>
                                <td>Living Place</td>
                                <td>
                                    <input type="text" placeholder="Place" value={placeORcollege} onChange={(e) => setPlaceORcollege(e.target.value)} />
                                </td>
                            </tr>
                            <tr>
                                <td>Contact Number</td>
                                <td>
                                    <input type="text" placeholder="Contact" value={contact} onChange={(e) => setContact(e.target.value)} />
                                </td>
                            </tr>
                            <tr>
                                <td>Amount to be Given</td>
                                <td>
                                    <input type="text" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
                                </td>
                            </tr>
                            <tr>
                                <td>Free "{currentDate}"</td>
                                <td>
                                    <select value={freeToday} onChange={(e) => setFreeToday(e.target.value)}>
                                        <option value="True">True</option>
                                        <option value="False">False</option>
                                    </select>
                                </td>

                            </tr>
                            <tr>
                                <td>
                                    <input type="submit" value="Submit" />
                                </td>
                            </tr>
                        </table>
                    </form>
                </div>
            )}
            {showdetails && (
                <div>
                    <p>Name :{name} </p>
                    <p>Email :{email}</p>
                    <p>Place :{placeORcollege}</p>
                    <p>Contact :{contact}</p>
                    <p>Amount :{amount}</p>
                </div>
            )}
            {showFreeToday && (
                <div className="update">
                    <div className="updatebtn">
                        <button onClick={() => setShowUpdateForm(!showUpdateForm)}>Update My Details</button>
                        <button onClick={() => showDetails()}>Show My Details</button>
                    </div>
                    <div>
                        <form className="freeornot" onSubmit={handleUpdate}>
                            <p className="p">Free Today({currentDate})</p>
                            <select value={freeToday} onChange={(e) => setFreeToday(e.target.value)}>
                                <option value="True">True</option>
                                <option value="False">False</option>
                            </select>
                            <input className="sub" type="submit" value="Update"></input>
                        </form>
                        {/* {showupdated && (<p>Updated Succeesfully</p>)} */}
                    </div>
                </div>
            )}


        </>
    );
};

export const UserEvents = () => {
    return (
        <>
            <AUNavbar />
            <p>Events</p>
        </>
    )
}