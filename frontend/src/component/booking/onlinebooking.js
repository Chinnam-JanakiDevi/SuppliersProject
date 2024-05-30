import NavigationBar from "../navbar/Navbar"
import './onlinebooking.css'
export const OnlineBook = () => {
    return (
        <>
            <NavigationBar />
            <div>
                <form className="bookForm">
                    <table>
                        <tr>
                            <td>name</td>
                            <td><input type="text" placeholder="enter your name"></input></td>
                        </tr>
                        <tr>
                            <td>email</td>
                            <td><input type="text" placeholder="Email"></input></td>
                        </tr>
                        <tr>
                            <td>Event Type</td>
                            <td><input type="text" placeholder="Event Name"></input></td>
                        </tr>
                        <tr>
                            <td>Contact number</td>
                            <td><input type="text" placeholder="Contact"></input></td>
                        </tr>
                        
                        <tr>
                            <td>message</td>
                            <td><input type="text" placeholder="Message"></input></td>
                            {/* <td><textarea rows="5" type="text" placeholder="Message"></textarea></td> */}
                        </tr>
                        <tr>
                            <td><input type="submit" value="submit"></input></td>
                        </tr>
                    </table>
                </form>
            </div>
        </>
    )
}