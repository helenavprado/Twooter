import React from "react";
import Navbar from "../molecules/Navbar";
import UserSection from "../molecules/UserSection";

class MainPage extends React.Component{
    render() {
        return <div>
            <Navbar></Navbar>
            <UserSection></UserSection>
        </div>
    }
}

export default MainPage;