import AdminNav from "../adminNavbar/adminNav";
import NavigationBar from "../navbar/Navbar"
import './Gallery.css'

export const Gallery = () => {
    return (
        <>
            <NavigationBar />
            <div className="gallery">
                <div className="images">
                    <img src="https://plus.unsplash.com/premium_photo-1664790560022-324e031a6352?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdlZGRpbmclMjBldmVudHxlbnwwfHwwfHx8MA%3D%3D"></img>
                    <img src="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D"></img>
                    <img src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fHww"></img>
                    <img src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fHww"></img>
                    <img src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fHww"></img>
                    <img src="https://plus.unsplash.com/premium_photo-1664790560022-324e031a6352?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdlZGRpbmclMjBldmVudHxlbnwwfHwwfHx8MA%3D%3D"></img>
                    <img src="https://plus.unsplash.com/premium_photo-1664790560022-324e031a6352?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdlZGRpbmclMjBldmVudHxlbnwwfHwwfHx8MA%3D%3D"></img>
                    <img src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fHww"></img>
                    <img src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fHww"></img>
                </div>
            </div>
        </>
    )
}

export const Events = () => {
    return (
        <>
            <NavigationBar />
            <div className="events-container">
                <h1>We do Events like</h1>
                <ul className="events-list">
                    <li>
                        <h2>Marriages</h2>
                        <p>We organize beautiful marriage ceremonies, ensuring a memorable day for the couple and their guests.</p>
                    </li>
                    <li>
                        <h2>Birthday Parties</h2>
                        <p>Celebrate your special day with our fantastic birthday party planning services.</p>
                    </li>
                    <li>
                        <h2>Corporate Events</h2>
                        <p>From conferences to team-building activities, we manage all types of corporate events.</p>
                    </li>
                    <li>
                        <h2>Concerts</h2>
                        <p>Experience the best live music events with our expertly organized concerts.</p>
                    </li>
                    <li>
                        <h2>Workshops</h2>
                        <p>We host engaging and educational workshops across various subjects.</p>
                    </li>
                    <li>
                        <h2>Charity Events</h2>
                        <p>Support great causes with our well-organized charity events.</p>
                    </li>
                </ul>
            </div>
        </>
    );
};
export const AdminEvents = () => {
    return (
        <>
            <AdminNav />
            <p>Admin events
            </p>
        </>
    )
}