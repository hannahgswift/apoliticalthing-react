import React from 'react';

class AlternativeFactz extends React.Component {
  render() {
    console.log(this.props.factz);
    return (
      <ul>
        <li>{this.props.factz.fact}</li>
      </ul>
    )
  }
}

export default AlternativeFactz;
