import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';

export const TOAST_SHORT = "2000";
export const TOAST_LONG = "4000";
export const TOAST_CLOSE = "toast_close";
export const TOAST_OPEN = "toast_open";

export const ToastPosition = {
    center: "c",
    bottomCenter: "bc",
    rightCenter: "rc",
    leftCenter: "lc",
    left: "l",
    right: "r",

}



const Wrapper = ({info, time, reset}) => {

    let watch = useRef(null);
    let hpRef = useRef();

    const handleMouseEnter = () => {
        window.clearTimeout(watch.current);
    }
    
    const handleMouseOut = () => {
        hide();
    }

    const show = () => {

        hpRef.current.style.transform = "translateY(-20px)";
        hpRef.current.style.opacity = 1;
        hpRef.current.style.pointerEvents = "auto";
        hide(time);

    }



    

    const hide = (time) => {
        watch.current = window.setTimeout(() => {
            hpRef.current.style.transform = "translateY(0px)";
            hpRef.current.style.opacity = "0";
            hpRef.current.style.pointerEvents = "none";
            reset();
        }, time);
        
    }

    useEffect(() => {
        if(typeof info === "string" && info.length > 0){
            show();
        }    
    })

    return (
        <React.Fragment>
            <div id="HPnotify" ref={hpRef} >

                <div id="HPFtext"
                    onMouseEnter={handleMouseEnter}
                    onMouseOut={handleMouseOut}
                >
                    {info}
                </div>

            </div>
        </React.Fragment>
    );

}

const mapState = ({toast}) => {
    return {
        info: toast.info,
        time: toast.time,
    }
}

let dispatcher = null
export const toast = (info = "Toast", time = TOAST_SHORT) => {
    dispatcher({type: TOAST_OPEN, info: info, time: time});
}

const resetToast = (dispatch) => {
    dispatcher = dispatch;
    return {
        reset: () => dispatch({type: TOAST_CLOSE, time: 0})
    }
}   

const Toast = connect(mapState, resetToast)(Wrapper);

export default Toast;
