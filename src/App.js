import React, { Component } from "react";

import "./App.css";
import CardContainer from "./component/cardContiner/cardContiner.component";
import Search from "./component/searchBox/search.component";
import Scroll from "./component/scroll/scroll.component";
import ErrorBoundry from "./component/errorBoundry/errorBoundry";
class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchValue: "",
    };
  }
  async componentDidMount() {
    const result = await (
      await fetch("https://jsonplaceholder.typicode.com/users")
    ).json();

    this.setState({ robots: result });
  }
  onSearchValueChange = (event) => {
    console.log(event.target.value);
    this.setState({ searchValue: event.target.value });
  };
  render() {
    const { searchValue, robots } = this.state;
    const filteredRobots = robots.filter((robo) =>
      robo.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    // console.log(filteredRobots);
    if (!this.state.robots.length) {
      return <h1>loading!!!</h1>;
    } else {
      return (
        <div className='main-container'>
          <h1>Robo Friends</h1>
          <Search handler={this.onSearchValueChange} />
          <Scroll>
            <ErrorBoundry>
              <CardContainer robots={filteredRobots} />
            </ErrorBoundry>
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
