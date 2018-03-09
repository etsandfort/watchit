import React, { Component } from 'react';
import logo from '../logo.png';
import './includes/Sidebar.css';

class Sidebar extends Component {


  render() {
    return (
      <div className="Sidebar">
        <header className="Sidebar-header">
          <img src={logo} className="Sidebar-logo" alt="logo" />
        </header>
        <div >
		 
          <div className="Sidebar-hover">
            <p className="Sidebar-buttons" onClick={this.props.handler.bind(this, {currentPage: "myList"})}>My List</p>
		  </div>
              <div className="Sidebar-hover">
                <p className="Sidebar-sub-buttons">TV Shows</p>
			  </div>
			  <div className="Sidebar-hover">
                <p className="Sidebar-sub-buttons">Movies</p>
              </div>
		  
		  <div className="Sidebar-hover">
			<p className="Sidebar-buttons" onClick={this.props.handler.bind(this, {currentPage: "discover"})}>Discover</p>
		  </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;