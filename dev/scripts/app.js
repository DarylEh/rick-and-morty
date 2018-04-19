import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import axios from 'axios';
import Sidebar from './components/Sidebar';
import DisplayCharacter from './components/DisplayCharacter';
import Buttons from './components/Buttons';
import SearchBar from './components/SearchBar';
import Header from './components/Header';
import StatusButton from './components/StatusButton';

class App extends React.Component {
	
    constructor(){
		super();
			this.state = {
				characters:[],
				selectedCharacter: [],
				// location:null,
				// origin:"",
				next:"",
				prev:"",
				searchTerm:""
			}
	
		this.handleClickNext = this.handleClickNext.bind(this);
		this.handleClickPrev = this.handleClickPrev.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.updateUrl = this.updateUrl.bind(this);
		// this.handleClickStatus = this.handleClickStatus.bind(this);
		// Debounce
		this.updateUrl = _.debounce(this.updateUrl, 500);
	};
	componentDidMount() {
		console.log(this.State)
		axios.get('https://rickandmortyapi.com/api/character').then(res =>{
			console.log(res);
			this.setState({
				characters: res.data.results,
				selectedCharacter: res.data.results[0],
				location: res.data.results.location,
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
	handleClickPrev (e) {
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
	
	// handleClickStatus (e){
	// 	e.preventDefault();
	// 	// console.log(this.state.selectedCharacter);
	// 	// if (this.state.selectedCharacter.status === 'Alive'){
	// 	// 	console.log("alive")
	// 	// } else if (this.state.selectedCharacter.status === 'Dead') {
	// 	// 	console.log('dead')
	// 	// }else {
	// 	// 	console.log('unknown')
	// 	// }
	// };
	
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
		// const hey = this.state.selectedCharacter && this.state.selectedCharacter.location ? this.state.selectedCharacter.location.name : null;
		// let
		const hey = ((this.state.selectedCharacter || {}).location || {}).name;
		console.log(hey)
		// const 
		return (

			<div className="main">
				{/* <div className="stars"> */}
			{/* <div className="twinkling"> */}
			
				<div className="main-display wrapper">
					<div className="main-display-list">
						<SearchBar 
							handleChange={this.handleChange}/>
						<Buttons 
							handleClickNext={this.handleClickNext}
							handleClickPrev={this.handleClickPrev}/>
						<Sidebar 
							characters = {this.state.characters}
							onCharacterSelect = {selectedCharacter => this.setState({selectedCharacter})}/>
					</div>
					<div className="main-display-card">
						<Header />
						<DisplayCharacter 
							character={this.state.selectedCharacter}
							// location={this.state.selectedCharacter}
							// location={((this.state.selectedCharacter || {}).location || {}).name}
							/>
						{/* <StatusButton status={this.state.selectedCharacter} handleClickStatus={this.handleClickStatus}/> */}
						
					</div>
				
				{/* </div> */}
			{/* </div> */}
				
				</div>
			</div>
		)
	}
}
ReactDOM.render(<App />, document.getElementById('app'));
