import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../Hooks/useAuth';
import "./Header.css"
import logo from "../../../images/logo.png"

const Header = () => {
    const { user, logOut, isLogin } = useAuth();
    return (
        <>
            <Navbar sticky="top" bg="dark" variant="dark" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home"><img className="logo" src={logo} alt="" /></Navbar.Brand>

                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>


                        <Link className="nav-item" to="/appointment">
                            Appointment
                        </Link>
                        <Link className="nav-item" to="/about">
                            About
                        </Link>





                        {user?.displayName ? (
                            <>
                                <Link className="nav-item" to="/orders">
                                    MyOrders
                                </Link>
                                <Link className="nav-item" to="/manageOrders">
                                    ManageAllOrders
                                </Link>
                                <Link className="nav-item" to="/addNew">
                                    AddNewService
                                </Link>
                                &&
                                <Navbar.Text>
                                    <a href="#login">{user?.displayName} </a>
                                </Navbar.Text>
                                <Button onClick={logOut} className="ms-3" variant="light">Log Out</Button>
                                &&

                            </>
                        )
                            : (
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            )





                        }






                    </Navbar.Collapse>

                </Container>
            </Navbar>


        </>
    );
};

export default Header;