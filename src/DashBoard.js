import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { register, unregister, enable, disable } from './reducers/components';
import Comment from './plugins/Comment';
import Note from './plugins/Note';
/*
const installedPlugins = [
  {
    component: Comment,
    name: 'comment'
  },
  {
    component: Note,
    name: 'note'
  }
]
*/

class DashBoard extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    const { register } = this.props;
    register(Comment, 'comment'); 
    register(Note, 'note');
  }

  render() {
    const { plugins } = this.props;
    return (
      [
        plugins.map(({ component, name, enabled }, index) => (
          <div key={index}>
            <span>{ name }</span>
            <input type="checkbox" onChange={this.onChange} checked={enabled} name={name}/>
          </div>
        ))
      ]
    )
  }

  onChange(e) {
    const { enable, disable } = this.props;
    if(e.target.checked) return enable(e.target.name);
    disable(e.target.name);
  }
}

function mapStateToProps(state) {
  return {
    plugins: state.components
  }
}

function mapDispatchToProps(dispatch) {
  return {
    register: compose(dispatch, register),
    unregister: compose(dispatch, unregister),
    enable: compose(dispatch, enable),
    disable: compose(dispatch, disable)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);