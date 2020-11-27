import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import User from '../user/user';

const Header = (props) => {
  const {login, avatar, children} = props;
  return (
    <header className={login ? `page-header user-page__head` : `page-header movie-card__head`}>
      <div className="logo">
        <Link className="logo__link" to={`/`}>
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>

      {children}

      {avatar
        ? <User />
        : null
      }
    </header>
  );
};

Header.propTypes = {
  login: PropTypes.bool.isRequired,
  avatar: PropTypes.bool.isRequired,
  children: PropTypes.node
};

export default Header;
