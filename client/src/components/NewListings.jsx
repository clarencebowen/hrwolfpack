import React from 'react';
import ReactDOM from 'react-dom';
import Listings from './Listings.jsx';
import $ from 'jquery';

class NewListings extends React.Component {

  constructor(props){
    super(props);
    this.state ={
      currentListings: []
    };
  }

  componentDidMount() {
    this.getNewListings();

    this.props.socket.on('newListing', (data) => {
      if (data.initializer !== this.props.userId) {
        var nNewListings = this.state.currentListings.concat(data);
        this.setState({
          currentListings: nNewListings
        });
      }
    });
  }

  getNewListings() {
    $.get('/newListings', (data) => {
      this.setState({
        currentListings: data
      });
    });
  }

  render () {
    return (
      <div>
        <Listings 
        currentListings={this.state.currentListings} 
        userId={this.props.userId} 
        socket={this.props.socket}/>
      </div>
    )
  }
}

export default NewListings;
