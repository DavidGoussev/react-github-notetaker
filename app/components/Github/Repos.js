import React from 'react';

var Repos = React.createClass({
  render() {
    return (
      <div>
        <h3> user profile </h3>
        <ul className="list-group">
          username: {this.props.username} <br />
          repos: {this.props.repos}
        </ul>
      </div>
    )
  }
});

export default Repos;
