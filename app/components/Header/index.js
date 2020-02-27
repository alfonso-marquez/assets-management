import React from 'react';

import { Navbar, Nav, Dropdown, DropdownButton } from 'react-bootstrap';

function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/">Assets Management</Navbar.Brand>
        <Nav className="justify-content-end" style={{ flex: '1' }}>
          <DropdownButton
            alignRight
            variant="secondary"
            title="Test User"
            id="dropdown-menu-align-right"
          >
            <Dropdown.Item eventKey="1">Account Details</Dropdown.Item>
            <Dropdown.Item eventKey="2">Logout</Dropdown.Item>
          </DropdownButton>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Header;
