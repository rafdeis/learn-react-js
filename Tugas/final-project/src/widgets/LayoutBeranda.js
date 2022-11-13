import React from "react";
import Footer from "../components/footer";
import Navigation from "../components/navbar";

const LayoutBeranda = (props) => {
    return(
        <>
        <Navigation/>
        <div className="container mx-auto">
        {props.children}
        </div>
        <Footer/>
        </>
    )
}

export default LayoutBeranda