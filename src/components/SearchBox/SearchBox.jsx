import { Component } from 'react';

class SearchBox extends Component {
  render() {
    const { className, type, placeholder, changeHandler } = this.props;

    return (
      <input
        className={className}
        type={type}
        placeholder={placeholder}
        onChange={changeHandler}
      />
    );
  }
}

export default SearchBox;
