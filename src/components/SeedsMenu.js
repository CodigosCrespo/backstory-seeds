import React from 'react';
import { Link } from 'react-router';

const SeedsMenu = () => {
  return (
    <div className="seeds-menu">
      <p className="seeds-links-list">
          <Link
            to="/seeds/bulletin-board"
            activeOnlyWhenExact
            activeClassName="active"
          >
            Bulletin-Board
          </Link>
          <label> | </label>
          <Link
            to="/seeds/add-seed"
            activeOnlyWhenExact
            activeClassName="active"
          >
            Plant Seed
          </Link>
      </p>
    </div>
  )
}

export default SeedsMenu;
