import React from 'react';
import PropTypes from 'prop-types';

const Header = ({titulo}) => {

   
    return (
        <nav className="navbar navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand h1" href="#!">{titulo}</a>
            </div>
        </nav>
    )
};

Header.propTypes = {
    titulo: PropTypes.string.isRequired
}

export default Header
