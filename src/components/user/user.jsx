import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {AuthorizationStatus} from "../../const";

const User = (props) => {
  const {userStatus, avatarUrl} = props;
  return (
    <>
    <div className="user-block">
      {userStatus === AuthorizationStatus.AUTH
        ?
        <Link to="/mylist">
          <div className="user-block__avatar">
            <img src={avatarUrl} alt="User avatar" width="63" height="63" />
          </div>
        </Link>
        :
        <Link to="/login" className="user-block__link">Sign in</Link>
      }
    </div>
    </>
  );
};

User.propTypes = {
  userStatus: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
};

const mapStateToProps = ({USER}) => ({
  userStatus: USER.authorizationStatus,
  avatarUrl: USER.avatarUrl
});

export {User};
export default connect(mapStateToProps, null)(User);
