import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";

class Video extends PureComponent {
  constructor(props) {
    super(props);
    this._videoRef = createRef();
  }

  componentWillUnmount() {
    if (this.filmTimeout) {
      clearTimeout(this.filmTimeout);
    }
  }

  // обновляем состоние тега видео
  componentDidUpdate() {
    const video = this._videoRef.current;

    if (this.props.isActive) {
      this.filmTimeout = setTimeout(() => {
        video.play();
      }, 1000);
    } else {
      video.load();
    }
  }

  render() {
    const {posterSrc, videoSrc} = this.props;
    return (
      <video
        className="player__video"
        muted
        poster={posterSrc}
        src={videoSrc}
        ref={this._videoRef}
      />
    );
  }
}

Video.propTypes = {
  posterSrc: PropTypes.string.isRequired,
  videoSrc: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired
};

export default Video;
