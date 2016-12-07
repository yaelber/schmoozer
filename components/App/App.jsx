import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import Template from '../Common/Template';
import EventCategories from '../EventCategories/EventCategories.jsx';
import EventForm from '../EventForm/EventForm.jsx';
import SingleCategoryDesigns from '../SingleCategoryDesigns/SingleCategoryDesigns.jsx';
import Preview from '../Preview/Preview.jsx';
import store from '../../store';
// import SingleCategoryDesigns from '../SingleCategoryDesigns/SingleCategoryDesigns';
// import SingleDesign from '../SingleDesign/SingleDesign';




export default class App extends Component {
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
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" component={Template} modalIsOpen={this.state.modalIsOpen} closeModal={this.closeModal} openModal={this.openModal} >
            <IndexRoute component={EventCategories}/>
              <Route path="/form" component= {EventForm}/>
              <Route path="/designs" component= {SingleCategoryDesigns} />
              <Route path ="/preview" component = {
                Preview} />
          </Route>
        </Router>
      </Provider>
    )
  }
}





