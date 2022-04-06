import React, { Component } from 'react';
import './Header.css';
import MyLogo from '../../assets/logo.svg';
import { Button } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import Box from '@material-ui/core/Box';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { TabPanel } from '@material-ui/lab';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const Header = function (props) {
    //const [modalShow, setModalShow] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const handleOpenMyModal = () => setOpen(true);
    const handleCloseMyModal = () => setOpen(false);
    const [value, setValue] = React.useState(0);

    return (
        <div>
        <div className="header">
            <div className="logo">
                <img src={MyLogo} alt="React Logo" width='35px'/>
            </div>
            <div className="topcorner">
                <Button variant="contained" color='primary'>Book Show</Button>&nbsp;
                <Button variant="contained" color='default' onClick={handleOpenMyModal}>Login</Button>&nbsp; 
                <Button variant="contained" color='default'>Logout</Button>&nbsp;
            </div>
        </div>
        <div>
        <Modal
          open={open}
          onClose={handleCloseMyModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Tabs centered>
                <Tab value="one" label="Login" />
                <Tab value="two" label="Register" />
            </Tabs>            
          </Box>
        </Modal>
      </div>
      </div>
    )
}

export default Header;