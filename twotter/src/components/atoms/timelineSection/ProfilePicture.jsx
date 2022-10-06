import React, { Component } from 'react';

class ProfilePicture extends Component {
    render() {
        return (
            <div>
                {this.props.icon}
            </div>
        );
    }
}

export default ProfilePicture;