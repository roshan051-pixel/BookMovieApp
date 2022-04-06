import React, { Component } from 'react';
import './Header.css';
import MyLogo from '../../assets/logo.svg';
import { Button } from '@material-ui/core';
import MyModal from './MyModal';

const Header = function (props) {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <div className="header">
            <div className="logo">
                <img src={MyLogo} alt="React Logo" width='35px'/>
            </div>
            <div className="topcorner">
                <Button variant="contained" color='primary'>Book Show</Button>&nbsp;
                <Button variant="contained" color='default' onClick={() => setModalShow(true)}>Login</Button>&nbsp; 
                <Button variant="contained" color='default'>Logout</Button>&nbsp;

                <MyModal show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </div>
        </div>
    )
}

export default Header;