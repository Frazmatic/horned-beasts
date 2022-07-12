import { Component } from "react";

//https://react-bootstrap.github.io/components/cards/
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class HornedBeast extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <Card className="horned-beast" style={{height: '100%'}}>
                <Card.Img variant="top" src={this.props.image_url} />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                        {this.props.description}
                    </Card.Text>
                    <Button variant="primary" size="lg" style={{width: "100%"}}>Vote Favorite</Button>
                </Card.Body>
            </Card>
        );
    }
}

export default HornedBeast;