import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Dialog, { DIALOG_HIDE, DIALOG_ALERT, DIALOG_CONFIRM } from './Dialog';
import EventBoxContainer, { EVENT_BOX } from './EventBoxContainer';
import Toast, { TOAST_OPEN, TOAST_SHORT, TOAST_CLOSE } from './Toast';
import { NAVIGATION } from './Navigator';

const mainState = {
    dialog: {
        type: DIALOG_HIDE,
        message: "",
        callback: null
    },

    toast: {
        info: "", time: TOAST_SHORT, type: TOAST_CLOSE
    },
    eventBox: {
        wX: 0, wY: 0, wW: 0, wH: 0
    },
    navigation: {
        activeName: null,
        components: {}
    }
}

const stated = (state, action) => {
    return Object.assign({}, state, action);
}

const store = createStore((state = mainState, action) => {

    switch (action.type) {
        case DIALOG_ALERT:
        case DIALOG_CONFIRM:
        case DIALOG_HIDE:
            return stated(state, { dialog: action });

        case TOAST_OPEN:
        case TOAST_CLOSE:

            return stated(state, { toast: action });

        case EVENT_BOX:
            return stated(state, {eventBox: action});

        case NAVIGATION:
            return stated(state, {navigation: action});
        default:
            return state;
    }
});

function HPcomponents({ children, load = true, activateEventBox = false }) {

    if (load) {

        return (
            <Provider store={store}>
                <EventBoxContainer store={store}>
                    {children}
                </EventBoxContainer>
                <Toast />
                <Dialog />
            </Provider>
        )
    }
    return (
        <Provider store={store}>
            {activateEventBox ? <EventBoxContainer store>{children}</EventBoxContainer> : children}
        </Provider>
    );
}

export default HPcomponents;