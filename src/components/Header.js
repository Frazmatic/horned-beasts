import { Component } from "react";
import './header.css';

class Header extends Component{


    render(){
        return(
            <section className="header">
                <h1>{this.props.title}</h1>
            </section>
        );
    }
}

export default Header;