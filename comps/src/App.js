import React from 'react';
import {Provider} from './services/Provider';
import Dialog from './ui/Dialog';
import Navigation from './Navigation';

function App() {

    return (
        <Provider>
            <Navigation />
            <Dialog />
        </Provider>
    );
}

export default App;