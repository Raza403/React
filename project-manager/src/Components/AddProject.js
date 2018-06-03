import React, { Component } from 'react';
import uuid from 'uuid';

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
  if(this.refs.title.value === ''){
    alert("Title is empty");
  }
  else{
    this.setState({
      newProject: {
        id: uuid.v4(),
        title: this.refs.title.value,
        catagory: this.refs.catagory.value
      }
    },function(){
      this.props.AddProject(this.state.newProject);
    })
  }
  e.preventDefault();
}

  render() {
    let catagoryOptions = this.props.catagories.map(catagory =>{
      return <option key={catagory} value={catagory}>{catagory}</option>
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
          <br/>
          <input type="submit" value="submit" />
          <br />           
          </div>
          </form>
      </div>
    );
  }
}

export default AddProject;
