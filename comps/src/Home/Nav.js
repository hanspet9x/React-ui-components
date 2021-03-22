import React, { Component } from 'react';
import FancyList from './../ui/FancyList';
import { Icons } from '../constant';
import './Nav.css';

class Nav extends Component {

    constructor(props){
        super(props);
        this.aColor = "#1ea7fd";
        this.inaColor = "#999";
        this.state = {link: null, ball: null, color: this.aColor, display: "block", display2: "none"}
    }

    handleClick = (link, ball)=>{
        this.setColors(link, ball);
        this.setState({link: link, ball: ball, color: this.inaColor});
        
    }

    componentDidMount(){
        this.setState({display2: "block"})
        window.onresize = ()=>{
            this.resizing();
        }
        window.onload = ()=>{
            this.resizing();
        }
    }
    componentDidUpdate(props, state){
        if(state.link !== null && state.link !== this.state.link){
            this.setInactive(state);
        }

        
    }

    resizing(){
        if(window.innerWidth <= 890){
            this.setState({display: "none"});
        }else{
            this.setState({display: "block"});
        }
    }
    
    setColors(link, ball){
        link.style.color = this.aColor;
        ball.style.backgroundColor = this.aColor;
    }

    setInactive(state){
        state.link.style.color = this.inaColor;
        state.ball.style.backgroundColor = this.inaColor;
    }

    handleToggle = ()=>{
        this.setState(state => {
            return {display: state.display === "none"? "block": "none"}
        })
    }
    render() {
        return (
            <nav id="sidebar" style={{display: this.state.display2}}>
            <div id="nav-anchor">
            <img src={Icons.menu} alt="toggle" onClick={this.handleToggle} />
            </div>
            
            <ul className="fancy-wrapper" style={{display: this.state.display}}>
                <li className="list-title">
                <a href="#h-container">Layouts</a>
                </li>
                
                    <FancyList first color={this.state.color} onClick={this.handleClick}>
                        <a href="#h-two">Two's</a>
                    </FancyList>
                                   
                    <FancyList color={this.inaColor} onClick={this.handleClick}>
                        <a href="#h-three" >Three's</a>
                    </FancyList>
                                  
                    <FancyList color={this.inaColor} onClick={this.handleClick}>
                        <a href="#h-four">Four's</a>
                    </FancyList>
                
                    <FancyList color={this.inaColor} onClick={this.handleClick}>
                        <a href="#h-three-one">Three's & One's</a>
                    </FancyList>

                    <FancyList color={this.inaColor} onClick={this.handleClick}>
                        <a href="#h-four-one">Four's & One's</a>
                    </FancyList>

                    <FancyList color={this.inaColor} onClick={this.handleClick}>
                        <a href="#layout-conclusion">Conclusion</a>
                    </FancyList>

                    <FancyList last color={this.inaColor} onClick={this.handleClick}>
                        <a href="#h-layout-example">Mini Example</a>
                    </FancyList>

                    {/*FORMS*/}
                    <br></br>
                    <li className="list-title">
                    <a href="#h-form">Forms</a>
                    </li>

                    <FancyList first color={this.inaColor} onClick={this.handleClick}>
                        <a href="#h-form-label">Label</a>
                    </FancyList>

                    <FancyList  color={this.inaColor} onClick={this.handleClick}>
                        <a href="#h-form-radio">Switch</a>
                    </FancyList>

                    <FancyList  color={this.inaColor} onClick={this.handleClick}>
                        <a href="#h-form-radio2">FormSwitch</a>
                    </FancyList>

                    <FancyList  color={this.inaColor} onClick={this.handleClick}>
                        <a href="#h-form-picture">FormPicture</a>
                    </FancyList>

                    <FancyList  color={this.inaColor} onClick={this.handleClick}>
                        <a href="#h-form-links">LinksHolder</a>
                    </FancyList>

                    <FancyList  color={this.inaColor} onClick={this.handleClick}>
                        <a href="#h-form-image">ImageField</a>
                    </FancyList>

                    <FancyList  color={this.inaColor} onClick={this.handleClick}>
                        <a href="#h-form-button">ButtonLoader</a>
                    </FancyList>
                    <FancyList color={this.inaColor} onClick={this.handleClick}>
                        <a href="#h-form-search">FormSearch</a>
                    </FancyList>
                    <FancyList last color={this.inaColor} onClick={this.handleClick}>
                        <a href="#h-form-example">FormExample</a>
                    </FancyList>
                    <FancyList last color={this.inaColor} onClick={this.handleClick}>
                        <a href="#h-form-example2">FormExample 2</a>
                    </FancyList>
                    <li className="list-title"><a href="#l-comp">Components</a></li>
                        <FancyList first color={this.inaColor} onClick={this.handleClick}>
                            <a href="#comp-dialog">Dialog</a>
                        </FancyList>
                        <FancyList color={this.inaColor} onClick={this.handleClick}>
                            <a href="#comp-closeable">CloseableInfo</a>
                        </FancyList>
                        <FancyList color={this.inaColor} onClick={this.handleClick}>
                            <a href="#comp-auto-closeable">AutoCloseableInfo</a>
                        </FancyList>

                        <FancyList color={this.inaColor} onClick={this.handleClick}>
                            <a href="#comp-views-holder">ViewsHolder</a>
                        </FancyList>

                        <FancyList color={this.inaColor} onClick={this.handleClick}>
                            <a href="#comp-tab-pane">TabPane</a>
                        </FancyList>
                        <FancyList last color={this.inaColor} onClick={this.handleClick}>
                            <a href="#comp-form-view-calendar">FormViewCalendar</a>
                        </FancyList>

                    <li className="list-title"><a href="#h-update-page">Updates</a></li>
                    <li className="list-title"><a href="#h-downloads">Downloads</a></li>   
                    
                    
            </ul>
        </nav>
        );
    }
}

export default Nav;