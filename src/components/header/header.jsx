import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

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
        ?
        <div className="user-block">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </div>
        </div>
        : null
      }
    </header>
  );
};

Header.propTypes = {
  login: PropTypes.bool.isRequired,
  avatar: PropTypes.bool.isRequired,
  children: PropTypes.elementType
};

export default Header;
