import React, { Component } from 'react';
import WindowHead from './WindowHead';
import WindowSidebar from './WindowSidebar';
import WindowContent from './WindowContent';
import WindowLastSideBar from './WindowLastSideBar';
class Window extends Component {
    render() {
        return (
            <div>
                <WindowHead />
                <WindowSidebar />
                <WindowContent />
                <WindowLastSideBar />
            </div>
        );
    }
}

export default Window;