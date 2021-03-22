import React, { Component } from 'react';

class Switch extends Component {

    constructor(props){

        super(props);

        /*
        sizes
        */
        this.left = (props.xs !== undefined)?["2.5px", "20px"]:["5px", "40px"];
        this.classname = (props.xs !== undefined)? "HPradio HPradio-xs": "HPradio";

        this.defaultStyle = {backgroundColor: "#eef0ee", left: this.left[0]};
        this.activeStyle = {backgroundColor: "#ddffdd", left: this.left[1]};
        this.vals = props.values !== undefined? props.values: ["yes", "no"];

        this.state = {active: false}

    }

   
    componentDidUpdate(props, state){
        
        if(state.active !== this.state.active){
            this.props.onClick(this.state.active);
        }
        
    }

    onSwitch = (e)=>{
        
        this.setState((state)=>{

            return {active: !state.active}

        });

    }

    
    render() {

        return (
            <>
                <div className={this.classname} id={this.props.id}
                style={{backgroundColor: this.state.active === true? this.activeStyle.backgroundColor: this.defaultStyle.backgroundColor}} 
                >
                    <div onClick={this.onSwitch} style={{left: this.state.active === true? this.activeStyle.left: this.defaultStyle.left}}></div>
                    
                </div>
            <span className="HpradioText">{this.state.active === true? this.vals[0]: this.vals[1]}</span>
        </>    
  
        );
    }
}

export default Switch;