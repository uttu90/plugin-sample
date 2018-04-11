import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createNote, editNote, deleteNote } from '../reducers/data/note';

class Note extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      note: ''
    };

    this.submit = this.submit.bind(this);
    this.note = this.note.bind(this);
  }

  render() {
    return (
      <form onSubmit={this.submit}>
        <input value={this.state.note} onChange={this.note} />
        <button type="submit" onClick={this.submit}>Add notes</button>
      </form>
    );
  }

  note(e) {
    this.setState({
      note: e.target.value
    })
  }

  submit(e) {
    e.preventDefault();
    this.props.createNote(this.state.note);
    this.setState({
      note: ''
    })
  }
}

export default connect(undefined, function(dispatch) {
  return {
    createNote: compose(dispatch, createNote),
    editNote: compose(dispatch, editNote),
    deleteNote: compose(dispatch, deleteNote)
  }
})(Note);
