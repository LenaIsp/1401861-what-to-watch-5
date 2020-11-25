import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";


const withPlayer = (Component) => {

  class WithPlayer extends PureComponent {

    constructor(props) {
      super(props);
      this._videoRef = createRef();
      this.state = {
        player: `play`,
        duration: 0,
        currentTime: 0,
      };
      this.handleClickPlay = this.handleClickPlay.bind(this);
      this.handleClickPause = this.handleClickPause.bind(this);
      this.handleClickFullScreen = this.handleClickFullScreen.bind(this);
    }

    handleClickPlay() {
      this.setState({player: `pause`});
      const video = this._videoRef.current;
      video.play();
    }

    handleClickPause() {
      this.setState({player: `play`});
      const video = this._videoRef.current;
      video.pause();
    }

    handleClickFullScreen() {
      const video = this._videoRef.current;
      video.requestFullscreen();
    }

    componentDidMount() {
      this._videoRef.current.oncanplay = () => {
        this.setState({
          duration: Math.floor(this._videoRef.current.duration),
        });
      };

      this._videoRef.current.ontimeupdate = () => {
        this.setState({
          currentTime: Math.floor(this._videoRef.current.currentTime),
        });
      };
    }

    render() {
      const {films, routes} = this.props;
      const idRoute = Number(routes.match.params.id);
      const {videoLink, backgroundImage} = films[idRoute - 1];

      return <Component
        {...this.props}
        handleClickPlay={this.handleClickPlay}
        handleClickPause={this.handleClickPause}
        handleClickFullScreen={this.handleClickFullScreen}
        player={this.state.player}
        duration={this.state.duration}
        currentTime={this.state.currentTime}>
        <video
          className="player__video"
          poster={backgroundImage}
          src={videoLink}
          ref={this._videoRef}
        />
      </Component>;
    }
  }

  WithPlayer.propTypes = {
    films: PropTypes.array.isRequired,
    routes: PropTypes.object.isRequired,
  };
  return WithPlayer;
};

export default withPlayer;
