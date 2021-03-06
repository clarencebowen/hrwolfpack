import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard.jsx';
import NewListings from './NewListings.jsx';
import JoinedListings from './JoinedListings.jsx';
import InitiatedListings from './InitiatedListings.jsx';

var Main = (props) => (
	<div>
	    <Switch>
	      <Route exact path="/new" render={(propz) => (
	        <NewListings
	        userId={props.userId}
	        socket={props.socket}/>
	      )}/>
	      <Route exact path="/joined" render={(propz) => (
	        <JoinedListings 
	        userId={props.userId}
	        socket={props.socket}/>		            
	      )}/>
	      <Route exact path="/initiated" render={(propz) => (
	        <InitiatedListings 
	        userId={props.userId}
	        socket={props.socket}/>
	      )}/>
	      <Route exact path="/" render={(propz) => (
	        <div>Welcome to the Dashboard</div>
	      )}/>
	    </Switch>
	</div>
);

export default Main;