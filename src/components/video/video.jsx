import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";

class Video extends PureComponent {
  constructor(props) {
    super(props);
    this._videoRef = createRef();
  }

  componentWillUnmount() {
    if(this.filmTimeout) {
      clearTimeout(this.filmTimeout)
    }
  }

  // обновляем состоние тега видео
  componentDidUpdate() {
    const video = this._videoRef.current;
    this.props.isActive
    ? this.filmTimeout = setTimeout(() => {video.play();}, 1000)
    : this.filmTimeout = setTimeout(() => {video.load();}, 1000)
  }

  render() {
    const {posterSrc, videoSrc, onMouseEnter, onMouseLeave, ref} = this.props;
    return (
      <div className="small-movie-card__image" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <video
          className="player__video"
          muted
          poster={posterSrc}
          src={videoSrc}
          ref={this._videoRef}
        />
      </div>
    );
  }
}

Video.propTypes = {
  posterSrc: PropTypes.string.isRequired,
  videoSrc: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired
};

export default Video;
