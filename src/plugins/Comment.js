import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { addComment, editComment, deleteComment } from '../reducers/data/comment';

class Comment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };

    this.submit = this.submit.bind(this);
    this.comment = this.comment.bind(this);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submit}>
          <input type="text" value={this.state.text} onChange={this.comment}/>
          <button type="submit" onClick={this.submit}>Add comment</button>
        </form>
      </div>
    );
  }

  comment(e) {
    this.setState({
      text: e.target.value
    })
  }

  submit(e) {
    e.preventDefault();
    const { text } = this.state;
    this.props.addComment(text);
    this.setState({
      text: ''
    })
  } 
}

function mapDispatchToProps(dispatch) {
  return {
    addComment: compose(dispatch, addComment),
    editComment: compose(dispatch, editComment),
    deleteComment: compose(dispatch, deleteComment)
  }
}

export default connect(undefined, mapDispatchToProps)(Comment);