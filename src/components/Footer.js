import { Component } from "react";

class Footer extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <section className="footer"><p>{this.props.author}</p></section>
        );
    }
}

export default Footer;