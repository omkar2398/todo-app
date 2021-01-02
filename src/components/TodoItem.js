import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '12px',
      margin: '25px 20px 25px 20px',
      boxShadow: '3px 3px 3px 3px #9E9E9E',
      borderRadius: '10px',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none',
    };
  };

  render() {
    const { id, title, completed } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            checked={completed}
            style={{
              float: 'left',
              margin: '4px 10px 4px 2px',
            }}
            onChange={this.props.markComplete.bind(this, id)}
          />
          {title}
          <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>
            x
          </button>
        </p>
      </div>
    );
  }
}

const btnStyle = {
  background: '#000847',
  color: '#fff',
  float: 'right',
  cursor: 'pointer',
  borderRadius: '50%',
  padding: '2px 5px',
  textDecoration: 'none',
};

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

export default TodoItem;
