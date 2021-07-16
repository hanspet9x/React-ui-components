import React, { useEffect, useMemo } from 'react';
import { connect } from 'react-redux';

export const NAVIGATION = "navigation";

let dispatcher = null;
let stated = null;

export const navigate = (routeName) => {

    dispatcher({type: NAVIGATION, activeName: routeName});
}


export const Route = ({ component, name }) => {
    return {name: name, component: component };
}

const Wrapper = ({component}) => {

    return component;
}

const stateProp = ({navigation}) => {
    stated = navigation;
    return {
        component: navigation.activeName !== null ? navigation.components[navigation.activeName] : ""
    }
}

let NavigatorWrpapper = connect(stateProp, (dispatch)=>{dispatcher = dispatch; return {}})(Wrapper);


const Navigator = ({ children, active }) => {

    //merge all components

    const allRoutes = useMemo(() => {

        let allRoutesObj = {};

        let firstName = "";

        children.forEach((e, i) => {
          
            let key = e.props.name;
            
            if(i === 0) firstName = key;

            allRoutesObj[key] = e.props.component;

        });

        return [firstName, allRoutesObj];

    }, [children]);


   useEffect(() => {
    //    console.log(stated);
        const {activeName} = stated;
        if (activeName === null) {
            //use the navigator active if defined
            //else use the first index; 
            if(active !== undefined){
                if(allRoutes[1].hasOwnProperty(active)){
                    dispatcher({type: NAVIGATION, activeName: active, components: allRoutes[1]});
                }
            }else{
                //pick the first and select it.
                dispatcher({type: NAVIGATION, activeName: allRoutes[0], components: allRoutes[1]});
            }
        } else {
            //updated state detected.
        }
    }); 

    return (
        <NavigatorWrpapper />
    );
}

export default Navigator;