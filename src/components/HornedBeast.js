import { Component } from "react";

//https://react-bootstrap.github.io/components/cards/
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Heart from '../img/heart.png';

class HornedBeast extends Component{
    constructor(){
        super();
        this.state = {favorited: 0};
    }

    handleClick = (e) => {
        this.setState({favorited: this.state.favorited + 1});
    }

    render(){
        return(
            <Card className="horned-beast" style={{height: '100%'}}>
                <Card.Img variant="top" src={this.props.image_url} />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                        {this.props.description}
                        <p><img src={Heart} alt={"heart icon"}></img> : {this.state.favorited}</p>
                    </Card.Text>
                    <Button 
                        variant="primary" 
                        size="lg" 
                        style={{width: "100%"}}
                        onClick= {this.handleClick}
                        >
                            Vote Favorite
                    </Button>
                </Card.Body>
            </Card>
        );
    }
}

export default HornedBeast;