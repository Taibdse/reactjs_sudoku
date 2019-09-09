import React from 'react';
import Navbar from './navbar';

const Layout = (props) => {
    return (
        <div>
            <Navbar/>
            <div className="content-wrapper">
                { props.children }
            </div>
        </div>
    );
};

export default Layout;
