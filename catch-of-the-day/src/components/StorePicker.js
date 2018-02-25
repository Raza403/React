import React from 'react';
class StorePicker extends React.Component{
  render(){
    //This is comment
    return (
      <form className="store-selector">
      {/*This is comment in jsx*/}
        <h2>Please Enter a store</h2>
        <input type="text" require placeholder="Store Name"/>
        <button type="submit">Visit Store</button>
      </form>
    )
  }
}

export default StorePicker;