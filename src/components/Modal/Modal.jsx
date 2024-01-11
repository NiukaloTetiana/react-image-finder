import React, { Component } from 'react';

import s from './Modal.module.css';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = e => {
    if (e.code === 'Escape') {
      this.props.closeModal('');
    }
  };

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.closeModal('');
    }
  };

  render() {
    const { url, alt_description } = this.props;

    return (
      <div className={s.overlay} onClick={this.handleBackdropClick}>
        <div className={s.modal}>
          <img className={s.img} src={url} alt={alt_description} />
        </div>
      </div>
    );
  }
}
