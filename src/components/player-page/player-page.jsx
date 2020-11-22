import React from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import Player from "../player/player";
import withPlayer from "../../hocs/with-player/with-player";


const PlayerPage = (props) => {
  const WrapPlayer = withPlayer(Player);
  const {routes, onReplayButtonClick, films} = props;
  return (
    <WrapPlayer routes={routes} onReplayButtonClick={onReplayButtonClick} films={films}/>
  );
};

PlayerPage.propTypes = {
  films: PropTypes.array.isRequired,
  onReplayButtonClick: PropTypes.func.isRequired,
  routes: PropTypes.object.isRequired,
};

const mapStateToProps = ({GENRE_CHANGE}) => ({
  films: GENRE_CHANGE.films
});

export {PlayerPage};
export default connect(mapStateToProps)(PlayerPage);
