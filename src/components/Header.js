import React from 'react';
import { Link } from 'react-router';

const Header = () => {
  return (
    <div className="App-header">
      {/*logohere - <img src={logo} className="App-logo" alt="logo" /> */}
      <h1>Backstory Seeds</h1>
      <ul>
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
            to="/seeds"
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
