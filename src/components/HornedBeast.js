import { Component } from "react";
import './hornedbeasts.css';

class HornedBeast extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <li className="horned-beast">
                <h1>{this.props.title}</h1>
                <img src={this.props.image_url} alt={this.props.description}></img>
                <p>{this.props.description}</p>
            </li>
        );
    }
}

export default HornedBeast;