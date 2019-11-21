import React from 'react';
import './App.css';
import Clock from './clock';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <div>
        <form>
          <label>
              Name:
              <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
      </form>
     </div>
      
    );
  }
}


export default App;
