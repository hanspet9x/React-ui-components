import React, { useState, useEffect } from 'react';


function FormSwitch(props) {
    
    const defaultStyle = {backgroundColor: "#eef0ee", left: "5px"};
    const activeStyle = {backgroundColor: "#ddffdd", left: "40px"};
    const vals = props.values !== undefined? props.values: ["yes", "no"];

    const [state, setState] = useState(false);
    const [style, setStyle] = useState(defaultStyle);
    const [value, setValue] = useState(vals[1]);

    const onSwitch =()=>{
        
        setState(!state);

        if(!state){
            setStyle(activeStyle);
            setValue(vals[0]);
        }else{
            setStyle(defaultStyle);
            setValue(vals[1]);
        }

        
    }

    useEffect(()=>{
        let e = {
            target:{
                name: props.name,
                value: state === true?vals[0]:vals[1]
            }
        }
        props.onChange(e);
    }, [props, state, vals]);

    return(
        <>
                <div className="HPradio" style={{backgroundColor: style.backgroundColor}}>
                    <div onClick={onSwitch} style={{left: style.left}}></div>
                </div>
                <span className="HpradioText">{props.values !== undefined? value: ""}</span>
                <input type="hidden" name={props.name} value={state} />
        </>
    );
}
export default FormSwitch;