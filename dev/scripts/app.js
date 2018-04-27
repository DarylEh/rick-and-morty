import React from "react";
import ReactDOM from "react-dom";
import _ from "lodash";
import axios from "axios";
import Sidebar from "./components/Sidebar";
import DisplayCharacter from "./components/DisplayCharacter";
import Buttons from "./components/Buttons";
import SearchBar from "./components/SearchBar";
import Header from "./components/Header";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      selectedCharacter: [],
      next: "",
      prev: "",
      searchTerm: ""
    };
    //Binding
    this.handleClickNext = this.handleClickNext.bind(this);
    this.handleClickPrev = this.handleClickPrev.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.updateUrl = this.updateUrl.bind(this);
    // Debounce 500ms
    this.updateUrl = _.debounce(this.updateUrl, 500);
  }
  componentDidMount() {
    axios.get("https://rickandmortyapi.com/api/character").then(res => {
      this.setState({
        characters: res.data.results,
        selectedCharacter: res.data.results[0],
        location: res.data.results.location,
        next: res.data.info.next,
        prev: res.data.info.prev
      });
    });
  }
  //Click event for next button
  handleClickNext(e) {
    e.preventDefault();
    let url = this.state.next;
    axios.get(url).then(res => {
      this.setState({
        characters: res.data.results,
        next: res.data.info.next,
        prev: res.data.info.prev
      });
    });
  }
  //Click event for prev button
  handleClickPrev(e) {
    e.preventDefault();
    let url = this.state.prev;
    axios.get(url).then(res => {
      this.setState({
        characters: res.data.results,
        next: res.data.info.next,
        prev: res.data.info.prev
      });
    });
  }
  //Handle change on Search Bar
  handleChange(e) {
    this.setState({
      searchTerm: e.target.value
    });
    // It's debounced!
    this.updateUrl();
  }
  //Debounce
  updateUrl() {
    this.setState({
      currentUrl: this.state.searchTerm
    });
    let searchTermInput = this.state.searchTerm;
    axios
      .get(`https://rickandmortyapi.com/api/character/?name=${searchTermInput}`)
      .then(res => {
        this.setState({
          characters: res.data.results,
          next: res.data.info.next,
          prev: res.data.info.prev,
          searchTerm: searchTerm
        });
      });
  }
  render() {
    const hey = ((this.state.selectedCharacter || {}).location || {}).name;
    return (
      <div className="main">
        <div className="main-display wrapper">
          <div className="main-display-list">
            <div className="main-display-search">
              <SearchBar handleChange={this.handleChange} />
              <Buttons
                handleClickNext={this.handleClickNext}
                handleClickPrev={this.handleClickPrev}
              />
            </div>
            <Sidebar
              characters={this.state.characters}
              onCharacterSelect={selectedCharacter =>
                this.setState({ selectedCharacter })
              }
            />
          </div>
          <div className="main-display-card">
            <Header />
            <DisplayCharacter character={this.state.selectedCharacter} />
          </div>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("app"));
