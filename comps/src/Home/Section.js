import React, { Component } from 'react';
import Layouts from './Lessons/Layouts';
import Forms from './Lessons/Forms';
import Updated from './Lessons/Updated';
import Downloads from './Lessons/Downloads';
import Components from './Lessons/Components';

class Section extends Component {
    render() {
        return (
            <div id="content-wrapper">
                <Layouts />
                <Forms /> 
                <Components />          
                <Updated />
                <Downloads />
            </div>
        );
    }
}

export default Section;