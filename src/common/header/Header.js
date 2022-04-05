import React, { Component } from 'react';
import './Header.css';
import MyLogo from '../../assets/logo.svg';
import { Button } from '@material-ui/core';
import MyVerticallyCenteredModal from './MyModal';

const Header = function (props) {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <div className="header">
            <div className="logo">
                <img src={MyLogo} alt="React Logo" width='35px'/>
            </div>
            <div align='right' vertical-align='top'>
                <Button variant="contained" color='default' onClick={() => setModalShow(true)}>Login</Button>
                <Button variant="contained" color='default'>Logout</Button>
                <Button variant="contained" color='primary'>Book Show</Button>

                <MyVerticallyCenteredModal show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </div>
        </div>
    )
}

export default Header;