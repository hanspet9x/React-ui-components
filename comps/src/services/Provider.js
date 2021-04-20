import React, { Component } from 'react';

export const AppContext = React.createContext();

export class Provider extends Component {

    constructor(props) {
        super(props);
        this.state = {dialogueType: 0, dialogueMsg: "", dialogueConfirmCallback:null} 
    }


    showAlert = (msg)=>{
        this.setState({dialogueType: 1, dialogueMsg: msg});
        
    }

    showConfirm =(msg, callback=null)=>{
        this.setState({dialogueType: 2, dialogueMsg: msg, dialogueConfirmCallback: callback});
    }

    hideAlert=()=>{
        this.setState({dialogueType: 0, dialogueMsg: ""});
    }

    hideConfirm=()=>{
        this.setState({dialogueType: 0, dialogueMsg: ""});
        if(this.state.dialogueConfirmCallback !== null ){
            this.state.dialogueConfirmCallback();
        }
    }

    render() {
        return (
            <AppContext.Provider value={{

                 alert: this.showAlert,
                 
                 confirm: this.showConfirm,

                 hideAlert: this.hideAlert,

                 hideConfirm: this.hideConfirm,

                 dialogueType: this.state.dialogueType,

                 dialogueMsg: this.state.dialogueMsg

                }}>
                {this.props.children}
            </AppContext.Provider>
        );
    }
}

export const Consumer = AppContext.Consumer