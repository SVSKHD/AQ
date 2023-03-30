import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FiUser } from "react-icons/fi";
import AQUALOGO from "../Assests/logo.png";
import { useDrawerStore } from "../Store/drawerStore";

const AquaHeader = () => {
  const showDrawer = useDrawerStore(state=>state.showDrawer);
  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">
          <img
            src={AQUALOGO}
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="Aquakart logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/shop">Shop</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Button variant="outline-success" onClick={showDrawer}>
              <FiUser size={25} />
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default AquaHeader;
