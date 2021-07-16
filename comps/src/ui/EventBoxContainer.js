import { useEffect } from 'react';

export const EVENT_BOX = "event-box";

function EventBoxContainer({ children, store }) {
    useEffect(() => {
        
        window.onscroll = () => {
        
            store.dispatch({
                wX: window.pageXOffset,
                wY: window.pageYOffset,
                wW: window.innerWidth,
                wH: window.innerHeight,
                type: EVENT_BOX
            });
        }

    });

    return children;
}

export default EventBoxContainer;