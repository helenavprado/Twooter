import React from "react";
import AuthorName from "../atoms/userSection/AuthorName";
import EditButton from "../atoms/userSection/EditButton";
import Username from "../atoms/userSection/Username";
import UserPicture from "../atoms/userSection/UserPicture";
import { FiEdit } from 'react-icons/fi'



class UserSection extends React.Component{
    render() {
        return <div className="user-section-container">
            <div>
                <UserPicture></UserPicture>
            </div>
            <div className="user-section-container-2">
                <Username></Username>
                <EditButton icon={<FiEdit />}></EditButton>
            </div>
            <div>
            <AuthorName></AuthorName>
            </div>
        </div>
    }
}

export default UserSection;