// import axios from 'axios';
import { Component } from 'react';
import { getPhotos } from 'components/api/gallery';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Searchbar } from '../Searchbar/Searchbar';
import { Button } from '../Button/Button';
import { Loader } from '../Loader/Loader';
import { Container, Text } from './App.styled';
import { Modal } from 'components/Modal/Modal';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
  state = {
    query: '',
    photos: [],
    page: 1,
    loading: false,
    error: null,
    totalPhotos: 0,
    isButtonShow: false,
    isEmpty: false,
    isLoadMore: false,
    largeImageURL: '',
  };

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.setState({ loading: true });
      getPhotos(query, page)
        .then(({ results, total }) => {
          if (!results.length) {
            this.setState({ isEmpty: true });
            toast.error(
              'Sorry, there are not any photos on your search. Please, try again.'
            );
            return;
          }
          if (page === 1) {
            toast.success(`Hooray! We found ${total} photos on your request!`);
          }
          this.setState(prev => ({
            photos: [...prev.photos, ...results],
            isButtonShow: page < Math.ceil(total / 20),
          }));
        })
        .catch(error => this.setState({ error: error.message }))
        .finally(() => this.setState({ loading: false }));
    }
  }

  handleSubmit = query => {
    this.setState({ query, isEmpty: false, photos: [], page: 1, error: null });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  handleClickImg = url => {
    this.setState({ largeImageURL: url });
  };

  render() {
    const { photos, loading, isButtonShow, error, largeImageURL, isEmpty } =
      this.state;

    return (
      <Container>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery photos={photos} openModal={this.handleClickImg} />
        {loading && <Loader />}
        {isButtonShow && <Button onClick={this.handleLoadMore} />}
        {isEmpty && <Text>No photos for your query!</Text>}
        {error && <Text>Oops...Sorry, something went wrong {error}</Text>}
        {largeImageURL && (
          <Modal url={largeImageURL} closeModal={this.handleClickImg} />
        )}
        <ToastContainer />
      </Container>
    );
  }
}
