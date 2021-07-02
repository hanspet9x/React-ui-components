import React from 'react';
import Scroll from './test/scroll';
import Dialog from './ui/Dialog';
import EventBoxContainer from './ui/EventBoxContainer';

function App() {



    return (

        <Dialog>
            <EventBoxContainer>
                <Scroll />
            </EventBoxContainer>
        </Dialog>

    );
}

export default App;