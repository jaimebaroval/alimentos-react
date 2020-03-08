import React from "react"

import logo from '../../../berenjena.png'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Navigation = () => {

    return (

        <Navbar bg="light" variant="light" className="position-fixed w-100 ">
            <Navbar.Brand href="/"><img src={logo} alt="Berenjena" /><span className="pl-2">Alimentos</span><strong>React</strong></Navbar.Brand>
            <Nav className="ml-auto">
                <Nav.Link href="/">Inicio</Nav.Link>
                <Nav.Link href="/alimentos">Alimentos</Nav.Link>
            </Nav>
        </Navbar>

    )

}

export default Navigation