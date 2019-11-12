import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

import './NavBar.css';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="nav-container">
      <Container>
        <Row>
          <Col>
            <Navbar color="transparent" light expand="md">
              <NavbarBrand href="/">Home</NavbarBrand>
              <NavbarToggler onClick={toggle} />
              <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="/friends">Friends</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="https://github.com/chingsley">GitHub</NavLink>
                  </NavItem>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      Options
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>
                        <NavLink href="/friends/new">Add a friend</NavLink>
                      </DropdownItem>
                      <DropdownItem>
                        <NavLink href="/friends/new">View all friends</NavLink>
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>
                        Reset
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
              </Collapse>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default NavBar;
