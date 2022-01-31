import logo from "../logo.svg";
import "../App.css";
import { Nav, Navbar } from "react-bootstrap";

function MainHeader() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" sticky="top" expand="lg">
        <Navbar.Brand>
          <img src={logo} width={40} height={40} href="home"></img>
          cinestarJS
        </Navbar.Brand>

        <Navbar.Toggle></Navbar.Toggle>

        <Navbar.Collapse>
          <Nav>
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/order">Order</Nav.Link>
            <Nav.Link href="/movies">Movies</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default MainHeader;
