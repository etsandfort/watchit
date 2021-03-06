import React, { Component } from 'react';
import './includes/App.css';
import './includes/SearchPage.css';
import ReactTable from 'react-table';

class SearchPage extends Component {
  constructor(){
    super();
    this.state={
      itemsToDisplay: [],
      inputValue: ''
    };
  }
  render() {
    const data = this.makeList();

    const columns = [{
      Header: 'Image',
      accessor: 'imageAndTitle',
      sortable: false,
      Cell: row => <img src={row.value.image} alt="Title Card" onClick={this.loadShowInfo.bind(this, row.value.title)}/>
    }, {
      Header: 'Title',
      accessor: 'imageAndTitle.title',
      Cell: row => <p onClick={this.loadShowInfo.bind(this, row.value)}>{row.value}</p>
    }, {
      Header: 'Global Score',
      accessor: 'globalScore' ,
    }, {
      Header: 'Type',
      accessor: 'type',
    }, {
      Header: '',
      accessor: 'listStatus',
      Cell: row => <button type="button" className="btn btn-primary"
                    onClick={ this.props.listStatusToggler.bind(this, row.value.key)}>{row.value.buttonText}</button>,
      sortable: false,
    }];
    
    let results = this.state.inputValue === ''? <p>Search for a Show or Movie</p> :
      <ReactTable
      noDataText={"No search results found"}
      className="-highlight"
      data={data}
      columns={columns} 
      minRows={1}
      tdStyle={ { whiteSpace: 'normal' } }
      showPagination={false}
      defaultPageSize={10}
      style={{
        height: "80vh"
      }}/>;

    return (
      <div className="SearchPage">
      <div className="flex-container">
      <div className="searchPage-content">
      <form>
        <input className="form-control" type="text" name="search" placeholder="Search..."
         value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)} autoFocus="true"/>
      </form>
        {results}
      </div>
      </div>
      </div>
    );
  }

  makeList(){
    var list = [];
    let i = 1;
    this.state.itemsToDisplay.forEach((item)=>{
      let buttonText = item.onMyList ? 'Remove from List' : 'Add to List'; 
      list.push({
        number: i,
        imageAndTitle: {image: item.image, title: item.title},
        myScore: item.myScore,
        globalScore: item.globalScore,
        friendScore: item.friendScore,
        type: item.type,
        genres: item.genres,
        listStatus: {buttonText: buttonText, key: item.title},
      });
      i++;
    });
    return list;
  }

  updateInputValue(evt) {
    this.setState({
      inputValue: evt.target.value
    }, this.search);
  }

  loadShowInfo(element){
    this.props.showInfoPageSetter(element);
    this.props.handler({currentPage: "showInfo"});
  }
  
  search(){
    let itemsToDisplay = [];
    this.props.listItems.forEach(element => {
      if(this.state.inputValue!=='' && 
      (element.title.toLowerCase().includes(this.state.inputValue.toLowerCase()) ||
      element.type.toLowerCase().includes(this.state.inputValue.toLowerCase()))){
        itemsToDisplay.push(element);
      }
    });
    this.setState({itemsToDisplay: itemsToDisplay});
  }

}



SearchPage.defaultState = {
  itemsToDisplay: [],
}

SearchPage.defaultProps = {
  listItems: [],
}

export default SearchPage;