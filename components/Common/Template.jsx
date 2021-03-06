import React, { Component, PropTypes } from 'react';
import Footer from './Footer/Footer';
import render from 'react-dom';
import Navigation from './Navigation/Navigation';
import LoginModal from './LoginModal/LoginModal';
import Preview from '../Preview/Preview';
import InviteSentModal from '../InviteSentModal/InviteSentModal';

class Template extends Component {
  constructor(props) {
    super(props);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    
    this.state = {
      modalIsOpen: false
    }
  }

    openModal () { this.setState({modalIsOpen: true}); }

    closeModal () { this.setState({modalIsOpen: false}); }


  
  render() {
    return (
      <div>
        <Navigation />
        <div className="container">
          {React.cloneElement(this.props.children, {openModal:this.openModal})}
          <Footer />
        </div>
        <InviteSentModal modalIsOpen={this.state.modalIsOpen} closeModal={this.closeModal} openModal={this.openModal} />
      </div>
    );
  }
}

export default Template;


// class Template extends Component {
//   constructor(props) {
//     super(props);
//     };
//     openModal = () => {
//     this.setState({modalIsOpen: true});
//     };
//     closeModal = () => {
//       this.setState({modalIsOpen:false});
//     };


    // this.openModal = this.openModal.bind(this);
    // this.closeModal = this.closeModal.bind(this);