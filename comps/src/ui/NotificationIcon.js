import React, { Component } from 'react';

class NotificationIcon extends Component {

    onHandleClick(){
        if(this.props.onClick !== undefined){
            this.props.onClick();
        }
    }
    render() {
        this.watcher();
        var id= (this.props.id !== undefined)?this.props.id:"ni"+Math.random*10000;
        return (
            <div className="notification-icon" onClick={this.onHandleClick} id={id}>
                <img src={this.props.src} alt="Notification" title="Notification" />
                <span>{this.props.len}</span>
            </div>
        );
    }

    watcher(){
        if(this.props.src === undefined)throw new Error("Src not specified...Image path is required for <NotificationIcon />")
    }
}

export default NotificationIcon;