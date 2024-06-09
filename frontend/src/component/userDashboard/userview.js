
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
    const { data} = location.state || {};
    return (
        <div>
            <AUNavbar data={data}/>
            <p>Welcome <b>{data.split("@gmail.com")}</b></p>
            
            {/* {name} */}
        </div>
    );
};

export default UserView;
