import React, { Component } from 'react';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      projects: []
    }
  }

  componentWillMount(){
    this.setState({
      projects: [
        {
          title: "Business Website",
          catagory: 'Web Design'
        },
        {
          title: "Social App",
          catagory: 'Mobile Development'
        },
        {
          title: "Ecommerce Shopping Cart",
          catagory: 'Web Development'
        }
      ]
    })
  }
  render() {
    return (
      <div className="App">
        <AddProject />
        <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
