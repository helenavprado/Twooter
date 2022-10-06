import React, { Component } from 'react';
import Icons from '../atoms/timelineSection/Icons';
import ProfilePicture from '../atoms/timelineSection/ProfilePicture';
import Text from '../atoms/timelineSection/Text';
import Twoot from '../atoms/timelineSection/Twoot';
import { BsFlag } from 'react-icons/bs';
import { AiOutlineHeart, AiOutlineRetweet } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg';


class Timeline extends Component {
    render() {
        return (
            <div className='timeline-container'>
                <div className='timeline-container-2'>
                    <div className='profile-picture-and-username'> 
                        <ProfilePicture icon={<CgProfile />}></ProfilePicture>
                        <Text text="Helena Prado"></Text>
                    </div>
                        <Text text="helena-prado"></Text>
                </div>
                    <Twoot></Twoot>
                <div className='timeline-container-3'>
                    <Text text="twooted 1 day ago"></Text>
                    <div className='icon-container'>
                        <Icons icon={<BsFlag />}></Icons>
                        <Icons icon={<AiOutlineHeart />}></Icons>
                        <Icons icon={<AiOutlineRetweet />}></Icons>
                    </div>
                </div>
            </div>
        );
    }
}

export default Timeline;