import React from 'react';


var Notes = React.createClass({
  render(){
    return (
      <div>
        <h3> notes for {this.props.username} </h3>
      </div>
    )
  }
});


export default Notes;
