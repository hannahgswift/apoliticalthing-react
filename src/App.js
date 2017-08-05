import React from 'react';
import AlternativeFactz from './AlternativeFactz';

let factz = {
  fact: 'this is a fact'
}

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Alternative Factz List</h1>
        <AlternativeFactz factz={this.props.factz}/>
      </div>
    )
  }
}

React.render(<App factz={factz}/>, document.getElementById('app'));
