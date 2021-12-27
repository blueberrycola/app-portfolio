import {Navbar, Container, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const Nv = () => {
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
          Chase's Website Portfolio!
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link href="/login">Login Demo (auth0)</Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link href="/product">Shopify Demo</Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link href="/ftp">FTP Demo</Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link href="/game">Game Demo</Nav.Link>
            </Nav.Item>
          </Nav>
 

        </Container>
      </Navbar>
    
    )
}

export default Nv