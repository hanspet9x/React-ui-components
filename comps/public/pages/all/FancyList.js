import React from 'react';
const FancyList = ({children, color, first, last, onClick})=>{


        var fancybartop = first !== undefined? "fancy-bar-hide": "";
        var fancybarbottom = last !== undefined? "fancy-bar-hide": "";

    const handleClick = (e)=>{
        let ball = e.target.parentNode.previousElementSibling.children[1];
        // console.log(e.target.innerHTML, ball);
        if(onClick !== undefined){
            onClick(e.target, ball);
        }
    }

    return(
        
        <li className="fancy-list">
            <div>
                <span className={fancybartop}></span>
                <b style={{backgroundColor: color !== undefined? color: "#ddd"}}></b>
                <span className={fancybarbottom}></span>
            </div>
            <div style={{color: color !== undefined? color: "#666"}} onClick={handleClick}>{children}</div>
        </li>
    );
}
export default FancyList;