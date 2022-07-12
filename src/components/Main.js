import { Component } from "react";
import HornedBeast from './HornedBeast'

//https://react-bootstrap.github.io/layout/grid
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Main extends Component{
    constructor(){
        super();
        //so far this is just read only, but seems like the type of things we might manipulate in the future
        //therefore treating it as state
        this.beasts = [{
            "_id": 1,
            "image_url": "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
            "title": "UniWhal",
            "description": "A unicorn and a narwhal nuzzling their horns",
            "keyword": "narwhal",
            "horns": 1
          },
        
          {
            "_id": 2,
            "image_url": "https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80",
            "title": "Rhino Family",
            "description": "Parent rhino with two babies",
            "keyword": "rhino",
            "horns": 2
          },
        
          {
            "_id": 3,
            "image_url": "https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg",
            "title": "Unicorn Head",
            "description": "Someone wearing a very silly unicorn head mask",
            "keyword": "unicorn",
            "horns": 1
        }];
    }
    
    //I could have returned just a ul here, but thought why not leave it open for adding things in the future
    render(){
        return(
            <Container fluid>
                <Row sm={1} md={3} lg={4}>
                    {this.beasts.map(b => 
                        <Col>
                            <HornedBeast 
                                key={b._id.toString()}
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