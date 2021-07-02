import React from 'react';
import DialogAlert from './DialogAlert';
import DialogConfirm from './DialogConfirm';
import { connect } from 'react-redux';


export const DIALOG_ALERT = "dig_A";
export const DIALOG_CONFIRM = "dig_C";
export const DIALOG_HIDE = "dig_H";

const getDialogAction = (type, message, callback) => {
    return {type: type, message: message, callback: callback}
}

let dispatcher = null;

// export const hide=(hideAlert)=>{
//         hideAlert();
//     }

export const alert = (message, callback = null)=>{
    dispatcher(getDialogAction(DIALOG_ALERT, message, callback));
}

export const confirm=(message, callback = null)=>{
    dispatcher(getDialogAction(DIALOG_CONFIRM, message, callback));
}

const mapStateToProps = (state)=>{
    return {
        type : state.dialog.type,
        message: state.dialog.message,
        confirmAction: state.dialog.callback
    }
}
    
const mapDispatchToProps = (dispatch)=> {
    dispatcher = dispatch;
    return {
        hide: ()=>dispatch(getDialogAction(DIALOG_HIDE, "", null)),
    }
}

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