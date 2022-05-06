import React, { useRef } from 'react';

const Header = props => {
  const inputRef = useRef();
  const formRef = useRef();

  const handleSubmit = event => {
    event.preventDefault();
    const input = inputRef.current.value;
    props.onSubmit(input);
    formRef.current.reset();
  };

  return (
    <>
      <div className="header">
        <ul className="search-header">
          <button className="logo" onClick={props.onClick}>
            <i className="logo-icon fa-brands fa-youtube"></i>  YouTube
          </button>
          <form className="search-bar" ref={formRef} onSubmit={handleSubmit}>
            <input className="search-input" ref={inputRef} type="text" />
            <button className="search-btn">
              <i className="search-glass fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </ul>
      </div>
    </>
  );
};

export default Header;