import React from 'react';
import './Accordion.css';
import {FaAngleUp} from 'react-icons/fa';

function Accordion({children, id, className}) {
    let classname = "hp-accordion";

    if(className !== undefined){
        classname += ` ${className}`;
    }

    return (
        <div className={classname} id={id}>
            {children}
        </div>
    );
}


export function AccordionList({name, children, className}){
    let classname = "hp-accordion-list";

    if(className !== undefined){
        className += ` ${className}`;
    }
    const handleClick = (e)=>{
        
        if(e.currentTarget.parentNode.classList.contains("hp-accordion-collpased")){
            e.currentTarget.parentNode.classList.remove("hp-accordion-collpased");
        }else{
            e.currentTarget.parentNode.classList.add("hp-accordion-collpased");
        }
        console.log(e.currentTarget.classList);
        // if(e.currentTarget)
    }

    return(
        
        <ul className={classname}>
            <li onClick={handleClick} className="hp-accordion-list-anchor">
                <h3>{name !== undefined? name : "Accordion"}</h3>
                <FaAngleUp />
            </li>
            <li className="hp-accordion-list-page">{children}</li>
        </ul>
            
    )
}
export default Accordion;