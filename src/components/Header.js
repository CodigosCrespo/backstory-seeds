import React from 'react';
import { Link } from 'react-router';

const Header = () => {
  return (
    <div className="App-header">
      <img src="https://s28.postimg.org/toa4vluq5/Jerel_GIF.gif" className="App-logo" alt="logo" />
      <h1>Backstory Seeds</h1>
      <ul className="header-links-list">
        <li>
          <Link
            to="/"
            activeOnlyWhenExact
            activeClassName="active"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/seeds/bulletin-board"
            activeOnlyWhenExact
            activeClassName="active"
          >
            Seeds
          </Link>
        </li>
        <li>
          <Link
            to="/resources"
            activeOnlyWhenExact
            activeClassName="active"
          >
            Resources
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Header;
