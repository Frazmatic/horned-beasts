import { Component } from "react";
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Modal show={this.props.showing} onHide={this.props.closeModal} size="xl">
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={this.props.picURL} alt={this.props.title} style={{width: "100%"}}></img>
                </Modal.Body>
                <Modal.Footer>
          
                </Modal.Footer>
            </Modal>
        );
    }
}

export default SelectedBeast