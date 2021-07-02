import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Scroll from './test/scroll';
import Dialog from './ui/Dialog';
import EventBoxContainer from './ui/EventBoxContainer';
import mainReducer from './utils/reducers';

function App() {



    const store = createStore(mainReducer);
    return (
        <Provider store={store}>
            <EventBoxContainer>
                <Scroll />
            </EventBoxContainer>
            <Dialog />
        </Provider>
    );
}

export default App;