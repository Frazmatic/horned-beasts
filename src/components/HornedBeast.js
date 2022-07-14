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

    handlePicClick = (e) => {
        this.props.handlePicClick(this);
    }

    render(){
        return(
            //wrapping in an anchor to make whole card clickable: https://stackoverflow.com/questions/53973644/making-whole-card-clickable-in-reactstrap
            <a onClick={this.handlePicClick}>
            <Card className="horned-beast" style={{height: '100%'}}>
                <Card.Img variant="top" src={this.props.image_url}/>
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                        {this.props.description}                           
                    </Card.Text>
                    <Card.Text>
                        <img src={Heart} alt={"heart icon"}></img> : {this.state.favorited}                         
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
            </a>
            
        );
    }
}

export default HornedBeast;