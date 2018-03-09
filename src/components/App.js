import React, { Component } from 'react';
import Sidebar from './Sidebar.js';
import AppContainer from './AppContainer.js';
import ShowInfo from './ShowInfo.js';
import './includes/App.css';

class App extends Component {
	constructor(props){
		super(props);
		this.handler = this.handler.bind(this);
		this.state = {
            currentPage: ""
        }
	}

	handler(state) {
		this.setState(state);
	}

    render() {
        return (
			<body className="App">
				<div className="flex-container">
					<div className="col-xs-3">
						<Sidebar handler = {this.handler.bind(this)}  currentPage={this.state.currentPage}/>
					</div>
					<div className="col-xs-9">
						<AppContainer currentPage={this.state.currentPage}/>
					</div>
				</div>
			</body>
        );
    }
}

App.defaultProps = {
	currentPage : "discover"
}

export default App;
