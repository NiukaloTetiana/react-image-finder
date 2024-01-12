import React, { Component } from 'react';
import s from './Searchbar.module.css';
import { HiMiniMagnifyingGlassCircle } from 'react-icons/hi2';
import { toast } from 'react-toastify';

export class Searchbar extends Component {
  state = {
    query: ``,
  };

  handleSubmit = e => {
    e.preventDefault();

    if (!this.state.query) {
      toast.info('No-no! You need to enter search word.');
      return;
    }
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  handleChange = e => {
    const { value } = e.target;
    this.setState({ query: value.toLowerCase() });
    this.props.closeModal('');
  };

  render() {
    return (
      <header className={s.searchbar}>
        <form className={s.form} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.button}>
            <HiMiniMagnifyingGlassCircle size="28" />
          </button>

          <input
            className={s.input}
            onChange={this.handleChange}
            type="text"
            placeholder="Search images and photos"
            value={this.state.query}
          />
        </form>
      </header>
    );
  }
}
