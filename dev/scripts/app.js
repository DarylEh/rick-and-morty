import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import axios from 'axios';
import Sidebar from './components/Sidebar';
import DisplayCharacter from './components/DisplayCharacter';
import Buttons from './components/Buttons';
import SearchBar from './components/SearchBar';

class App extends React.Component {
    constructor(){
		super();
			this.state = {
				characters:[],
				selectedCharacter: [],
				next:"",
				prev:"",
				searchTerm:""
			}
		this.handleClickNext = this.handleClickNext.bind(this);
		this.handleClickPrev = this.handleClickPrev.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.updateUrl = this.updateUrl.bind(this);
		// Debounce
		this.updateUrl = _.debounce(this.updateUrl, 500);
	};
	componentDidMount() {
		axios.get('https://rickandmortyapi.com/api/character').then(res =>{
			this.setState({
				characters: res.data.results,
				selectedCharacter: res.data.results[0],
				next: res.data.info.next,
				prev: res.data.info.prev,
			});
		});
	};
	handleClickNext (e) {
		e.preventDefault();
		let url = this.state.next;
    	axios.get(url).then(res => {
			this.setState({
				characters: res.data.results,
				next: res.data.info.next,
				prev: res.data.info.prev,
			});
		});
	};
	handleClickPrev(e) {
		e.preventDefault();
		let url = this.state.prev;
		axios.get(url).then(res => {
			this.setState({
				characters: res.data.results,
					next: res.data.info.next,
					prev: res.data.info.prev,
			});
		});
	};
	handleChange(e) {
		this.setState({
			searchTerm: e.target.value
		});
		// It's debounced!
		this.updateUrl();	
	}

	updateUrl() {
		this.setState({
			currentUrl: this.state.searchTerm
		});
		let searchTermInput = this.state.searchTerm;
		axios.get(`https://rickandmortyapi.com/api/character/?name=${searchTermInput}`).then(res => {
			this.setState({
				characters: res.data.results,
				next: res.data.info.next,
				prev: res.data.info.prev,
				searchTerm: searchTerm
			});
		});
	}
	render() {
		return (
			<div className="main">
				<div className="main-list">
					<SearchBar 
						handleChange={this.handleChange}/>
					<Sidebar 
						characters = {this.state.characters}
						onCharacterSelect = {selectedCharacter => this.setState({selectedCharacter})}/>
					<Buttons 
						handleClickNext={this.handleClickNext}
						handleClickPrev={this.handleClickPrev}/>
				</div>
				<div className="main-display">
					<DisplayCharacter character={this.state.selectedCharacter}/>
				</div>
			</div>
		)
	}
}
ReactDOM.render(<App />, document.getElementById('app'));
