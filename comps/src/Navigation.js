import React from 'react';
import LayoutContainer from './ui/layout/LayoutContainer';
import Two from './ui/layout/Two';
import Card from './ui/layout/Card';

const Navigation = ()=>{

    return(
        <React.Fragment>
            <header style={style.header}>
                <h2>JavaScript</h2>
            </header>
            <LayoutContainer>
                <Two>
                    <Card center>
                        <h2>Utils</h2>
                    </Card>
                </Two>
                <Two>
                    <Card center>
                        <h2>React Components</h2>
                    </Card>
                </Two>
                <Two></Two>
            </LayoutContainer>
        </React.Fragment>
    );
};


const style = {
    header: {
        textAlign: 'center',
    }
}
export default Navigation;