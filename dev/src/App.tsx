import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container, Row, Col, Jumbotron, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Body from './components/Body/Body'



interface State {
  isOpen: boolean;
}

class App extends Component<{}, State>{

  state: Readonly<State> = {
    isOpen: false
  };

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };


  render(){
    return(
      <div>
        <Navbar color="inverse" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap
                /reactstrap">Github</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Jumbotron>
          <Container>
            <Body />
            <Row>
              <Col>
                <h1>Welcome to React</h1>
                <p><Button tag="a" color="success" size="large"
                           href="http://reactstrap.github.io"
                           target="_blank">View Reactstrap
                  Docs</Button></p>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}
export default App;