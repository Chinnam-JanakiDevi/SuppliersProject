import React from "react";
import { useLocation } from "react-router-dom";
import AdminNav from "../adminNavbar/adminNav";

const AdminView = () => {
    const location = useLocation();
    const { data} = location.state || {};
    console.log(data);
    return (
        <div>
            <AdminNav />
            <p>Admin</p>
            {data}
            {/* {name} */}
        </div>
    );
};

export default AdminView;

export const BookedList=()=>{
    return(
        <></>
    )
}