import React, { Component } from 'react';
import Characters from '../atoms/composeTwoot/Characters';
import Input from '../atoms/composeTwoot/Input';
import Title from '../atoms/composeTwoot/Title';
import TwootButton from '../atoms/composeTwoot/TwootButton';

class ComposeTwoot extends Component {
    render() {
        return (
            <div className='compose-twoot-container'>
                <Title></Title>
                <Input></Input>
                <div className='compose-twoot-container-2'>
                    <TwootButton></TwootButton>
                    <Characters></Characters>
                </div>
            </div>
        );
    }
}

export default ComposeTwoot;