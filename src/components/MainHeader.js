import { Nav, Navbar } from "react-bootstrap";
import logo from "../logo.svg";
import "../App.css";

function MainHeader() {

  const goHome = () => {
    window.location = '/home';
  }
  return (
    <div>
      <Navbar bg="dark" variant="dark" sticky="top" expand="lg">
        <Navbar.Brand  onClick={goHome} className="cursor">
          <img src={logo} width={40} height={40}></img>
          cinestarJS
        </Navbar.Brand>

        <Navbar.Toggle></Navbar.Toggle>

        <Navbar.Collapse>
          <Nav>
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/order">Order</Nav.Link>
            <Nav.Link href="/movies">Movies</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/test">Test</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default MainHeader;
