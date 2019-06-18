import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {

  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  render() {
    const { id, title, completed } = this.props.todo;
    return (
      <div style={ this.getStyle() }>
        <p>
          <input type="checkbox" checked={completed} onChange={this.props.markCompleted.bind (this, id)} /> {' '}
          { title }
          <button onClick={this.props.delTodo.bind(this, id)} style={btnSyle}>x</button>
        </p>
      </div>
    )
  }
}

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markCompleted: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
}

const btnSyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right',
}

export default TodoItem
