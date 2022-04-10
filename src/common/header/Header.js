import React, { Fragment, useState } from 'react';
import './Header.css';
import MyLogo from '../../assets/logo.svg';
import { Button } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import Box from '@material-ui/core/Box';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { TextField } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import TabPanel from "./tabPanel/TabPanel";
import { Link } from "react-router-dom";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 16,
};

const Header = ({ bookShow, bookShowId }) => {
    const handleOpenMyModal = () => setLoginOpen(true);
    const handleCloseMyModal = () => setLoginOpen(false);
    const [loginOpen, setLoginOpen] = useState(false);
    const [value, setValue] = useState(0);
    const [login, setLogin] = useState(true);
    const [success, setSuccess] = useState(false);

    const loginHandler = () => {
        setLoginOpen(true);
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const loginFormHandler = () => {
        setLogin(false);
        setLoginOpen(false);
    };

    const registerFormHandler = () => {
        setLogin(false);
        setSuccess(true);
    };
    return (
        <Fragment>
            <div className="header">
                <div className="logo">
                    <img src={MyLogo} alt="React Logo" width='35px' />
                </div>
                <div className="topcorner">
                    {bookShow ? (
                        <Link
                            to={"/book-show/" + bookShowId}
                            style={{ textDecoration: "none" }}
                        >
                            <Button variant="contained" color='primary'>Book Show</Button>
                        </Link>
                    ) : null}
                    {login ?
                        (<Button variant="contained" color='default' onClick={handleOpenMyModal}>Login</Button>)
                        :
                        (<Button variant="contained" color='default' onClick={() => {
                            setLogin(true);
                        }} >Logout</Button>)
                    }
                </div>
            </div>
            <Modal
                open={loginOpen}
                onClose={handleCloseMyModal}
                ariaHideApp={false}
                style={{
                    overlay: {
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "rgba(255, 255, 255, 0.75)",
                    },
                    content: {
                        position: "absolute",
                        top: "40px",
                        left: "500px",
                        right: "500px",
                        bottom: "40px",
                        width: "300px",
                        border: "1px solid #ccc",
                        background: "#fff",
                        overflow: "auto",
                        WebkitOverflowScrolling: "touch",
                        borderRadius: "4px",
                        outline: "none",
                        padding: "20px",
                    },
                }}
            >
                <div>
                    <Box sx={style}>
                        <Tabs value={value} onChange={handleChange}>
                            <Tab label="Login" />
                            <Tab label="Register" />
                        </Tabs>
                        <TabPanel value={value} index={0}>
                            <div>
                                <div class="column">
                                    <TextField label="Username" required style={{ margin: "5px 0px" }} />
                                    <TextField
                                        label="Password"
                                        required
                                        type="password"
                                        style={{ margin: "5px 0px" }}
                                    />
                                </div>
                                <Button
                                    variant="contained"
                                    onClick={loginFormHandler}
                                    color="primary"
                                    style={{ margin: "20px 20px" }}
                                >
                                    Login
                                </Button>
                            </div>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <TextField
                                label="First Name"
                                required
                                style={{ margin: "5px 0px" }}
                            />
                            <TextField label="Last Name" style={{ margin: "5px 0px" }} />
                            <TextField label="Email" required style={{ margin: "5px 0px" }} />
                            <TextField
                                label="Password"
                                required
                                type="password"
                                style={{ margin: "5px 0px" }}
                            />
                            <TextField
                                label="Contact No"
                                required
                                style={{ margin: "5px 0px" }}
                            />
                            {success ? (
                                <Typography variant="subtitle1" gutterBottom>
                                    Registration Successful. Please login!
                                </Typography>
                            ) : null}
                            <Button
                                variant="contained"
                                onClick={registerFormHandler}
                                color="primary"
                                style={{ margin: "20px 20px" }}
                            >
                                Register
                            </Button>
                        </TabPanel></Box>
                </div>
            </Modal>
        </Fragment>
    )
}

export default Header;