import React, { Component } from 'react';
import './includes/MyList.css';
import ReactTable from 'react-table';

class MyList extends Component {
  render() {
    const data = [{
      number: 1,
      image: "/images/jojo.jpg",
      title: "Star Wars Episode 3: Revenge of the Sith",
      myScore: 9.2,
      globalScore: 6.9,
      friendScore: 9.5,
      type: "Movie",
      genres: ["Sci-Fi", "Fantasy"]
    },
    {
      number: 2,
      image: "jojo.jpg",
      title: "Yu-Gi-Oh! The Dark Side of Dimensions",
      myScore: 10,
      globalScore: 10,
      friendScore: 10,
      type: "Movie",
      genres: ["Lit", "Children's Card Games"]
    },
    {
      number: 3,
      image: "jojo.jpg",
      title: "JoJo's Bizarre Adventure",
      myScore: 10,
      globalScore: 9.5,
      friendScore: 9.8,
      type: "TV",
      genres: ["Baby Stand", "Nani"]
    }];
  
    const columns = [{
      Header: '#',
      accessor: 'number'
    }, {
      Header: 'Image',
      accessor: 'image',
      Cell: props => <img src={props.value} alt="Title Card"/>
    }, {
      Header: 'Title',
      accessor: 'title'
    }, {
      Header: 'My Score',
      accessor: 'myScore'
    }, {
      Header: 'Global Score',
      accessor: 'globalScore' 
    }, {
      Header: 'Friend\'s Score',
      accessor: 'friendScore' 
    }, {
      Header: 'Type',
      accessor: 'type' 
    }, {
      Header: 'Genres',
      accessor: 'genres' 
    }];
    return (
      <div className="MyList container">
      <header className="row">
          <h1 className="App-title">MyList</h1>
        </header>
        <div className="row">
          <div className="col-sm-4 control-group">
            <div className="btn-toolbar">
            <button className="btn btn-primary">
              Add a Show/Movie
            </button>
            </div>
          </div>
          <div className="col-sm-4 offset-sm-4">
            <div className="btn-toolbar">
            <button className="btn btn-info">
              Advanced Search
            </button>
            </div>
          </div>
        </div>
        <ReactTable
          className="-striped -highlight"
          data={data}
          columns={columns} 
          minRows={1}
          showPagination={false} />
      </div>
    );
  }
}

export default MyList;
