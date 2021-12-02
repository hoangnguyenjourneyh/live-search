import React, { useRef } from 'react';
import styles from './SearchForm.module.css';

function SearchForm(props) {
  const inputRef = useRef();
  const { onChange, onSubmit } = props;

  const handleSubmit = e => {
    const value = inputRef.current.value;
    e.preventDefault();
    onSubmit && onSubmit(value);
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        aria-label="Search users"
        className={styles.input}
        onChange={onChange}
      />
      <button
        onClick={onSubmit}
        type="submit"
        className={styles.button}
      >
        Search
      </button>
    </form>
  )
}

export default SearchForm
