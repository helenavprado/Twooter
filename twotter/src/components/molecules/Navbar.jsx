import React from "react";
import Logo from "../atoms/navbar/Logo";
import WriteTwoot from "../atoms/navbar/WriteTwoot";
import "../atoms/style.css"

class Navbar extends React.Component{
    render() {
        return <div className="navbar"> 
            <Logo></Logo>
            <WriteTwoot></WriteTwoot>
        </div>
    }
}

export default Navbar