import React, { Component } from 'react';
import DialogAlert from './DialogAlert';
import DialogConfirm from './DialogConfirm';
import {Consumer} from '../services/Provider'

class Dialog extends Component {
    //receives str message, int type


    hide=(hideAlert)=>{
        hideAlert();
    }

    confirm=(hideConfirm)=>{
        hideConfirm();
    }

    render() {

        return (        
                <Consumer>
                    {({hideAlert, hideConfirm, dialogueType, dialogueMsg}) =>{
                        var boxToShow;

                        switch (dialogueType) {
                            case 1:
                                boxToShow = <div id="HPalrtConfm">
                                            <DialogAlert message={dialogueMsg} onHide={()=>this.hide(hideAlert)} />
                                            </div>
                                break;
                            case 2:
                                boxToShow = <div id="HPalrtConfm">
                                                <DialogConfirm 
                                                message={dialogueMsg} 
                                                onHide={()=>this.hide(hideAlert)} 
                                                onConfirm={()=>this.confirm(hideConfirm)} />
                                            </div>
                                break;
                            default:
                                break;
                        }
                        return boxToShow
                    }}
                </Consumer>      
        );
    }
}

export default Dialog;