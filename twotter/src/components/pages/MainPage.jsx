import React from "react";
import Navbar from "../molecules/Navbar";
import UserSection from "../molecules/UserSection";
import ComposeTwoot from "../molecules/ComposeTwoot";
import Timeline from "../molecules/Timeline";


class MainPage extends React.Component{
    render() {
        return <div className="page-container">
            <Navbar></Navbar>
            <UserSection></UserSection>
            <ComposeTwoot></ComposeTwoot>
            <Timeline></Timeline>
        </div>
    }
}

export default MainPage;