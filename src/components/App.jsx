import { Component } from 'react';
import { fetchItems } from './Api/Api';
import SearchBar from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ToastContainer } from 'react-toastify';

export class App extends Component {
  state = {
    items: [],
    value: '',
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.value !== this.state.value ||
      this.state.page !== prevState.page
    ) {
    }
  }
  handleSubmit = value => {
    this.setState({ items: [], value: '', page: 1 });
  };
  render() {
    return (
      <div>
        <SearchBar onSubmit={this.handleSubmit} />;
        <ImageGallery items={this.state.items} />
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
