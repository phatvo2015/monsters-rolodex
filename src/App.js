import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { CartList } from './components/card-list/card-list.component.jsx'
import { Search } from './components/search/seach.component'

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value })
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json()).then(users => this.setState({ monsters: users }))
  }

  render() {
    const { monsters, searchField } = this.state
    const filterMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return (
      <div className="App">
        <h1> Monsters Rolodex </h1>
        <Search
          placeholder='search monsters'
          handleChange={this.handleChange}
        />
        <CartList monsters={filterMonsters}></CartList>
      </div>
    )
  }
}
export default App;