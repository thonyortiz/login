import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Cookies from 'universal-cookie';
import { NavDropdown } from 'react-bootstrap';
// import { NavbarBrand } from 'react-bootstrap';
// import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
// import ListGroup from 'react-bootstrap/ListGroup';


const cookies = new Cookies();

class Menu extends Component {
	cerrarSesion = () => {
		cookies.remove('id', { path: '/' });
		cookies.remove('primer_apellido', { path: '/' });
		cookies.remove('segundo_apellido', { path: '/' });
		cookies.remove('nombre', { path: '/' });
		cookies.remove('username', { path: '/' });
		window.location.href = './';
	};

	componentDidMount() {
		if (!cookies.get('username')) {
			window.location.href = './';
		}
	}

	render() {
		console.log('id: ' + cookies.get('id'));
		console.log('primer_apellido: ' + cookies.get('primer_apellido'));
		console.log('segundo_apellido: ' + cookies.get('segundo_apellido'));
		console.log('nombre: ' + cookies.get('nombre'));
		console.log('username: ' + cookies.get('username'));
		return (
			<>
				<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
					<Navbar.Brand href="#home">App Login React-Bootstrap </Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="mr-auto">
							<Nav.Link href="/menu">Perfil</Nav.Link>
							<Nav.Link href="/menu">Pagina Principal</Nav.Link>
							<NavDropdown title="Servicios" id="collasible-nav-dropdown">
								<NavDropdown.Item href="#action/3.1">
									Entretenimiento
								</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.2">
									Informacion
								</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.3">
									Asesorias
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action/3.4">
									Call Center
								</NavDropdown.Item>
							</NavDropdown>
						</Nav>
						<Nav>
							<Nav.Link href="#deets">Mas Opciones</Nav.Link>
							<Nav.Link eventKey={2} onClick={() => this.cerrarSesion()}>
								Cerrar Sesion
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>

				<Card>
					<Card.Header>
						<Nav variant="pills" defaultActiveKey="#first">
							<Nav.Item>
								<div className="alert alert-light" role="alert">
									<h3>Estas en la Seccion Perfil del Usuario</h3>
								</div>
							</Nav.Item>
							{/* <Nav.Item>
								<Nav.Link href=" ">Pagina Principal</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link href="#disabled" disabled>
									Intranet
								</Nav.Link>
							</Nav.Item> */}
						</Nav>
					</Card.Header>
					<Card.Body>
                    <div className="card border-primary mb-3" styled="max-width: 18rem;">
						<div className="col-md-6 p-3 mb-2 bg-info text-white" styled="max-width: 18rem;" >
							<Card.Title>{'Nombre: ' + cookies.get('nombre')}</Card.Title>
						</div>
						<div className="col-md-6 p-3 mb-2 bg-info text-white" styled="max-width: 18rem;">
							<Card.Title color="blue">
								{'Primer Apellido: ' + cookies.get('primer_apellido')}
							</Card.Title>
						</div>
                        <div className="col-md-6 p-3 mb-2 bg-info text-white" styled="max-width: 18rem;">
							<Card.Title color="blue">
								{'Segundo Apellido: ' + cookies.get('segundo_apellido')}
							</Card.Title>
						</div>
						

						<Card.Text><br />
							Why do we use it? It is a long established fact that a reader will
							be distracted by the readable content of a page when looking at
							its layout. The point of using Lorem Ipsum is that it has a
							more-or-less normal distribution of letters, as opposed to using
							'Content here, content here', making it look like readable
							English. Many desktop publishing packages and web page editors now
							use Lorem Ipsum as their default model text, and a search for
							'lorem ipsum' will uncover many web sites still in their infancy.
							Various versions have evolved over the years, sometimes by
							accident, sometimes on purpose (injected humour and the like).
						</Card.Text>
                        
						<Button className="col-md-6 p-3" variant="primary" onClick={() => this.cerrarSesion()}>
							Cerrar Sesion
						</Button>
                        </div>
					</Card.Body>
				</Card>
			</>
		);
	}
}

export default Menu;
