import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css';
import { Col, Container, Row } from 'react-bootstrap';

const App = () => {
    return (
	<Container className="main">
	    <Row>
		<Col>
		    <h1 className="text-center fs-3 text-uppercase d-print-none pt-3">
			Vitae - <span className="text-capitalize text-primary">Create your resume.</span>
		    </h1>
		    <p className="text-dark text-center fs-5 text-primary">
			Fill in the details you want your awesome resume to display
		    </p>
		</Col>
	    </Row>
	    <Row className="info-resume">
		
	    </Row>
	</Container>
    )
}


export default App;
