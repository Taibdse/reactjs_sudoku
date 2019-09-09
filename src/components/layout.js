import React from 'react';
import PropTypes from 'prop-types';
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

Layout.propTypes = {};

export default Layout;
