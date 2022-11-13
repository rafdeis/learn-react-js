import Cookies from "js-cookie";
import React from "react";
import { Navigate } from "react-router-dom";

const DashboardRoute = (props) => {
    if(Cookies.get('token') === undefined ){
        return <Navigate to={'/'}/>
    } else if (Cookies.get('token') !== undefined){
        return props.children
    }
}

export default DashboardRoute