import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {
  state = {
    title: '',
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div>
        <form
          onSubmit={this.onSubmit}
          style={{
            display: 'flex',
            position: 'fixed',
            bottom: '10px',
            width: '100%',
          }}
        >
          <input
            type="text"
            name="title"
            style={{
              flex: '10',
              padding: '10px',
              margin: '0px 10px',
              wordWrap: 'auto',
            }}
            placeholder="Add your notes..."
            value={this.state.title}
            onChange={this.onChange}
          />
          <input
            type="submit"
            value="Add"
            className="btn"
            style={{
              flex: '1',
              padding: '10px',
              margin: '0px 10px 0px 0px',
              background: '#000847',
              color: '#fff',
            }}
          />
        </form>
      </div>
    );
  }
}

// PropTypes
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default AddTodo;
