import React, { Component } from 'react';


class AddProject extends Component {

constructor(){
  super();
  this.state = {
    newProject: {}
  }
}
static defaultProps = {
  catagories: ['Web Design', 'Web Development', 'Mobile Development']
}
handleSubmit(e){
  console.log(this.refs.title.value);
  e.preventDefault();
}

  render() {
    let catagoryOptions = this.props.catagories.map(catagory =>{
      return <option key={catagory} value="catagory">{catagory}</option>
    });
    return (
      <div>
      <h3>Add Project</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Title</label><br />
            <input type='text' ref='title' />
          </div>
          <div>
            <label>Catagory</label><br />
            <select ref="catagory">
            {catagoryOptions}
            </select>
          </div>
          <div>
          <input type="submit" value="submit" />          
          </div>
          </form>
      </div>
    );
  }
}

export default AddProject;
