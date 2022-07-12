import { Component } from "react";
import HornedBeast from './HornedBeast'
import beastJSON from '../data.json';

//https://react-bootstrap.github.io/layout/grid
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Main extends Component{
    constructor(){
        super();
        this.state = {beasts: beastJSON}
    }
    
    //I could have returned just a ul here, but thought why not leave it open for adding things in the future
    render(){
        return(
            <Container fluid>
                <Row xs={1} sm={2}md={3} lg={4} xl={5}>
                    {this.state.beasts.map(b => 
                        <Col key={b._id.toString()}>
                            <HornedBeast 
                                title={b.title}
                                image_url={b.image_url}
                                description={b.description}
                            />
                        </Col>
                    )}
                </Row>  
            </Container>
        );
    }
}

export default Main;