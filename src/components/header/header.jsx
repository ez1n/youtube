import React, { memo, useRef } from 'react';
import styles from './header.module.css'

const Header = memo((props) => {
  const inputRef = useRef();

  const handleSearch = event => {
    event.preventDefault();
    const input = inputRef.current.value;
    props.onSearch(input);
    inputRef.current.value = '';
  };

  const handleClick = event => {
    handleSearch(event);
  };

  const handleKeyUp = event => {
    if (event.keyCode === 13) {
      handleSearch(event);
    }
  };

  console.log("hello")

  return (
    <header className={styles.header}>
      <div className={styles.logo} onClick={props.onReturn}>
        <img className={styles.img} src="/images/logo.png" alt="logo" />
        <h1 className={styles.title}>Youtube</h1>
      </div>
      <input
        className={styles.input}
        ref={inputRef}
        type="search"
        placeholder="Search..."
        onKeyUp={handleKeyUp}
      />
      <button className={styles.btn} onClick={handleClick}>
        <img src="/images/search.png" className={styles.btnImg} alt="search" />
      </button>
    </header>
  );
});

export default Header;