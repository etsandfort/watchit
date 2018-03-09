import React, { Component } from 'react';
import Sidebar from './Sidebar.js';
import AppContainer from './AppContainer.js';
import ShowInfo from './ShowInfo.js';
import './includes/App.css';
import MyList from './MyList.js';

class App extends Component {
    render() {
        return (
          <body className="App">
            <div className="flex-container">
                <div className="col-xs-3">
                    <Sidebar/>
                </div>
                <div className="col-xs-9">
                    <ShowInfo/>
                </div>
            </div>
          </body>
        );
    }
}

export default App;
