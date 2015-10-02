import React from 'react';

var AddNote = React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired,
    addNote: React.PropTypes.func.isRequired
  },
  handleSubmit: function(){
    var newNote = this.refs.note.getDOMNode().value;
    this.refs.note.getDOMNode().value = '';
    this.props.addNote(newNote);
  },
  render: function(){
    return (
      <div className="input-group">
        <input type="text" className="form-control" ref="note" placeholder="add new note" />
        <span className="input-group-btn">
          <button className="btn btn-default" type="button" onClick={this.handleSubmit}> submit </button>
        </span>
      </div>
    )
  }
});

export default AddNote;
