import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

import './style.css';

function NavBar() {
    return (
        <div className='navbar'>
        <Navbar bg="dark" variant="dark" >
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/weatherAndLocation">Weather</Nav.Link>
            <Nav.Link as={Link} to="/calendarWrapper">Calendar</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    )
}

export default withRouter(NavBar); 