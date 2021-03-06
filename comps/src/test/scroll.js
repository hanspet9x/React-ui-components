import React from 'react';
import EventBox from '../ui/EventBox';
import { toast, TOAST_LONG } from '../ui/Toast';
import { HP } from '../utils/HP';

function Scroll(props) {
    return (
        <div style={{ border: 'solid 1px red', width: 400, textAlign: 'center' }}>
            <div style={styles.div}> </div>
            <div style={styles.div}> </div>
            <button onClick={()=>toast("Hello", TOAST_LONG)}>show alert</button>
            <EventBox title="Menu" >
                <div style={HP.combineStyles(styles.div, { border: 'solid 1px green' })}> </div>
            </EventBox>
            <div style={styles.div}> </div>
            <EventBox title="Menu 2" >
                <div style={HP.combineStyles(styles.div, { border: 'solid 1px purple' })}> </div>
            </EventBox>

            <div style={styles.div}> </div>
            <div style={styles.div}> </div>
        </div>
    );
}

const styles = {
    div: {
        width: 300,
        height: 600,
        border: 'solid 1px blue',
        marginBottom: 20,
        display: 'inline-block',
    }
}

export default Scroll;