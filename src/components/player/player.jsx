import React from "react";
import PropTypes from "prop-types";

const Player = (props) => {
  const {films, routes, onReplayButtonClick, handleClickPlay, handleClickPause, handleClickFullScreen, player, children, duration, currentTime} = props;
  const idRoute = Number(routes.match.params.id);
  const {name} = films[idRoute - 1];
  const progress = currentTime / duration * 100;
  const SubstringElapsed = {
    START: 8,
    END: 11,
  };
  const MS_IN_S = 1000;
  const time = new Date((duration - currentTime) * MS_IN_S).toISOString().substr(SubstringElapsed.END, SubstringElapsed.START);

  return (
    <div className="player">
      {children}
      <button type="button" className="player__exit" onClick={onReplayButtonClick}>Exit</button>
      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={!progress ? 0 : progress} max="100"></progress>
            <div className="player__toggler" style={{left: progress + `%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{time}</div>
        </div>

        <div className="player__controls-row">
          {player === `play`
            ? <button type="button" className="player__play" onClick={handleClickPlay}>
              <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" >
                <path fillRule="evenodd" clipRule="evenodd" d="M0 0L19 9.5L0 19V0Z" fill="#EEE5B5"/>
              </svg>
              <span>Play</span>
            </button>
            : <button type="button" className="player__play" onClick={handleClickPause}>
              <svg viewBox="0 0 27 27" width="27" height="27">
                <g id="Artboard" stroke="none" strokeWidth="1" fill="none"fillRule="evenodd">
                  <polygon id="Line" fill="#EEE5B5" fillRule="nonzero" points="0 -1.11910481e-13 4 -1.11910481e-13 4 21 0 21"/>
                  <polygon id="Line" fill="#EEE5B5" fillRule="nonzero" points="10 -1.11910481e-13 14 -1.11910481e-13 14 21 10 21"/>
                </g>
              </svg>
              <span>Pause</span>
            </button>
          }

          <div className="player__name">{name}</div>

          <button type="button" className="player__full-screen" onClick={handleClickFullScreen}>
            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M23.8571 0H16V3.14286H23.8571V11H27V3.14286V0H23.8571Z" fill="#FFF9D9" fillOpacity="0.7"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M27 23.8571V16H23.8571V23.8571H16V27H23.8571H27L27 23.8571Z" fill="#FFF9D9" fillOpacity="0.7"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M0 3.14286L0 11H3.14286L3.14286 3.14286L11 3.14286V0H3.14286H0L0 3.14286Z" fill="#FFF9D9" fillOpacity="0.7"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M3.14286 27H11V23.8571H3.14286L3.14286 16H0L0 23.8571V27H3.14286Z" fill="#FFF9D9" fillOpacity="0.7"/>
            </svg>
            <span>Full screen</span>
          </button>
        </div>

      </div>
    </div>
  );
};


Player.propTypes = {
  films: PropTypes.array.isRequired,
  routes: PropTypes.object.isRequired,
  onReplayButtonClick: PropTypes.func.isRequired,
  handleClickPlay: PropTypes.func.isRequired,
  handleClickPause: PropTypes.func.isRequired,
  handleClickFullScreen: PropTypes.func.isRequired,
  player: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
  duration: PropTypes.number.isRequired,
  currentTime: PropTypes.number.isRequired,
};

export default Player;
