import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav, Button, Form, FormControl, Image, Text } from 'react-bootstrap';


const Header = () => {

    const [nav, setNavbar] = useState(false);

    const changeBackground = () => {

        if (window.scrollY >= 100) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };
    window.addEventListener('scroll', changeBackground);
    return (

        <>

            <Navbar fixed="top" className={nav ? 'nav scroll1' : 'nav '} >
                <Navbar.Brand className="logo1" as={Link} to="/"></Navbar.Brand>
                <Navbar.Brand className="logo2" as={Link} to="/"></Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Item className="active item" as={Link} to="/">Početna</Nav.Item>
                    <Nav.Item className="item" as={Link} to="/Doniraj">Doniraj</Nav.Item>
                    <Nav.Item className="item" as={Link} to="/Vijesti">Vijesti</Nav.Item>
                    <Nav.Item className="item" as={Link} to="/Blog">Blog</Nav.Item>
                    <Nav.Item className="item" as={Link} to="/Galerija">Galerija</Nav.Item>
                    <Nav.Item className="item" as={Link} to="/Prijatelji">Prijatelji</Nav.Item>
                    <Nav.Item className="item" as={Link} to="/O_nama">O nama</Nav.Item>
                </Nav>
            </Navbar>



        </>
    );

}

export default Header;