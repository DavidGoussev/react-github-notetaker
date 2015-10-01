import React from 'react';

var UserProfiles = React.createClass({
  render() {
    return (
      <div>
        <h3> user profile </h3>
        <ul className="list-group">
          username: {this.props.username} <br />
          bio: {this.props.bio}
        </ul>
      </div>
    )
  }
});

export default UserProfiles;
