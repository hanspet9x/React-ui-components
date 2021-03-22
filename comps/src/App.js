import React from 'react';
import {Provider} from './Provider';
import Home from './Home/Home';
import Dialog from './ui/Dialog';
function App() {
    
    return (
        <Provider>
            <Home />
            <Dialog />
        </Provider>
    );
}

export default App;