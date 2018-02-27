import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';

class App extends React.Component{
  render(){ 
    return(
      <div className='catch-of-the-day'>
        <div className='menu'>
          <Header age='500' cool={true} tagline='Fresh sea food'/>
        </div>
        <Inventory/>
        <Order/>
      </div>
    )
  }
}

export default App;