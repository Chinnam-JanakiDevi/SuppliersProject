import React from "react";
import { useLocation } from "react-router-dom";
import AUNavbar from "../newNavbar/AUNavbar";

const AdminView = () => {
    const location = useLocation();
    const { data, name } = location.state || {};
    console.log(data);
    return (
        <div>
            <AUNavbar />
            <p>Admin</p>
            {data}
            {name}
        </div>
    );
};

export default AdminView;
