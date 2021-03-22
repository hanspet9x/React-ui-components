import React, { useRef, useEffect, useLayoutEffect } from 'react';

export const CENTER = 1;
export const BOTTOM = 0;

function ViewsHolder({children, type = 0, labels = ["next", "prev"]}) {
    let slidesSize = [];

    let values = labels.slice(0);
    let slide = 0;
    const viewsRef = useRef();

    const handleNext =(e)=>{

    if(slide >= 0 && slide < children.length-1){
        slide++;
        updateLayout();
        let views = e.currentTarget.parentNode.parentNode.firstChild.children;

        
        for (let i = 0; i < views.length; i++) {
            
            if(slide !== i){
                views[i].classList.remove("views-holder-active");
                views[i].classList.add("views-holder-hide");
            }
        }
        views[slide].classList.add("views-holder-active");
        if(slide === children.length-1)e.currentTarget.classList.add("view-switch-hide");
        e.currentTarget.nextElementSibling.classList.remove("view-switch-hide");

    }
    }

     const handlePrev = (e)=>{
    if(slide > 0 && slide <= children.length-1){

        slide--;
        updateLayout();
        let views = e.currentTarget.parentNode.parentNode.firstChild.children;


        
        for (let i = 0; i < views.length; i++) {
            
            if(slide !== i){
                views[i].classList.remove("views-holder-active");
                views[i].classList.add("views-holder-hide");
            }
        }
        views[slide].classList.add("views-holder-active");
        e.currentTarget.previousElementSibling.classList.remove("view-switch-hide");
        if(slide === 0)e.currentTarget.classList.add("view-switch-hide");
    }
    }
   
    let switchType;
    
    if(type === 1){
        switchType = "views-switch-middle";
        values = ["‹", "›"];
    }


    useEffect(()=>{
        for (let i = 0; i < viewsRef.current.children.length; i++) {
            slidesSize.push({
                w: viewsRef.current.children[i].offsetWidth, 
                h: viewsRef.current.children[i].offsetHeight
            });           
        }
        updateLayout();
    });

    useLayoutEffect(()=>{
        console.log(viewsRef.current.children[0].firstChild.offsetWidth);
    });

    const updateLayout = () =>{
        viewsRef.current.style.width = `${slidesSize[slide].w}px`;
        viewsRef.current.style.height = `${slidesSize[slide].h}px`;
    }
    return(

        <div className="views-holder">
            <div className="views-holder-views" ref = {viewsRef}>
                {children}
            </div>

            {children.length > 1?
                <div className={`${switchType} horizontal-glue views-holder-switches`}>
                    <span onClick={handleNext} className={"views-switch-next"}><b>{values[0]}</b></span>
                    <span onClick={handlePrev} className="views-switch-prev view-switch-hide"><b>{values[1]}</b></span>
                </div>:""}
            
            
        </div>
    );
}

export const View = ({children}) => {
    
  
    return(
        <div className="views-holder-child">
          
                {children}
            
        </div>
    )
}

export default ViewsHolder;