import React, { Component } from 'react';
import { connect } from 'react-redux';
import DashBoard from './DashBoard';

class App extends Component {
  render() {
    const { plugins, data } = this.props;
    const endabledComponents = plugins.filter(({ enabled }) => enabled);
    return (
      <div>
        <data>
          comments:
          <br />
          <ul>
          {
            data.comments.map((comment, index) => (
              <li key={comment.id}>{comment.text}</li>
            ))
          }
          </ul>
        </data>
        <data>
          notes:
          <br />
          <ol>
          {
            data.notes.map((note, index) => (
              <li key={note.id}>{note.note}</li>
            ))
          }
          </ol>
        </data>
        {
          endabledComponents.map(({ component: Plugin }, index) => (
            <Plugin key={index}/>
          ))
        }
        <DashBoard />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    plugins: state.components,
    data: state.data
  }
}

export default connect(mapStateToProps)(App);
