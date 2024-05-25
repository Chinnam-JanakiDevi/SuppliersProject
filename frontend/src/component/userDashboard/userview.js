
// const UserView = (props) => {
//     return (
//         <><p>user</p>
//         {props.data}</>
//     )
// }
// export default UserView
import React from "react";
import { useLocation } from "react-router-dom";
import AUNavbar from "../newNavbar/AUNavbar";

const UserView = () => {
    const location = useLocation();
    const { data, name } = location.state || {};
    console.log(data);
    return (
        <div>
            <AUNavbar />
            <p>User</p>
            {data}
            {name}
        </div>
    );
};

export default UserView;
