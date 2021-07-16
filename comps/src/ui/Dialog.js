import React from 'react';
import { connect } from 'react-redux';


export const DIALOG_ALERT = "dig_A";
export const DIALOG_CONFIRM = "dig_C";
export const DIALOG_HIDE = "dig_H";

const getDialogAction = (type, message, callback) => {
    return {type: type, message: message, callback: callback}
}

let dispatcher = null;

export const alert = (message, callback = null)=>{
    dispatcher(getDialogAction(DIALOG_ALERT, message, callback));
}

export const confirm=(message, callback = null)=>{
    dispatcher(getDialogAction(DIALOG_CONFIRM, message, callback));
}

const mapStateToProps = ({dialog})=>{
    return {
        type : dialog.type,
        message: dialog.message,
        confirmAction: dialog.callback
    }
}
    
const mapDispatchToProps = (dispatch)=> {
    dispatcher = dispatch;
    return {
        hide: ()=>dispatch(getDialogAction(DIALOG_HIDE, "", null)),
    }
}

const DialogAlert = ({message, onHide})=> {

    
    const closeDialogue = ()=>{
        onHide();
    }

    
        return (
            <ul id="HPalert">
                <li>Alert</li>
                <li>{message}</li>
                <li><button onClick={closeDialogue}>ok</button></li>
            </ul>
        );
    
}

const DialogConfirm = ({onHide, onConfirm, message}) => {


    const hide = ()=>{
       onHide();
    }

    const confirm = ()=>{
        onConfirm();
    }


        return (
            <ul id="HPalert">
                <li>Confirm</li>
                <li>{message}</li>
                <li>
                    <button onClick={confirm}>ok</button>
                    <button onClick={hide}>cancel</button>
                </li>
            </ul>
        );
}

/**
 * The wrapper for dialog.
 * @param {*} props
 * @returns view
 */
const Wrapper = ({hide, confirmAction, type, message}) =>{

    var boxToShow;

    const onHideAlert = () =>{
        hide();
        if(confirmAction != null){
            confirmAction(false);
        }
    }

    const onHideConfirm = () => {
        hide();
        if(confirmAction != null){
            confirmAction(true);
        }
    }


    switch (type) {
        case DIALOG_ALERT:
            boxToShow = <div id="HPalrtConfm">
                            <DialogAlert message={message} onHide={onHideAlert} />
                        </div>
            break;
        case DIALOG_CONFIRM:
            boxToShow = <div id="HPalrtConfm">
                            <DialogConfirm 
                            message={message} 
                            onHide={onHideAlert} 
                            onConfirm={onHideConfirm} />
                        </div>
            break;
        default:
            boxToShow = ""
            break;
    }
    return boxToShow
                

}


const Dialog = connect(mapStateToProps, mapDispatchToProps)(Wrapper); 

export default Dialog;