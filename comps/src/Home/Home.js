import React, { Component } from 'react';
import HeaderNav from './HeaderNav';
import Nav from './Nav';
import Section from './Section';
import './Home.css';



class Home extends Component {
    render() {
        return (
            <>
                <HeaderNav />
                <div id="navsec">
                    <Nav />
                    <Section />
                </div>
                
            </>
        );
    }
}

export default Home;