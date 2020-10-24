import React, {PureComponent} from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

class MovieCard extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    };
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter() {
    this.setState({isActive: true});
  }

  handleMouseLeave() {
    this.setState({isActive: false});
  }

  render() {
    const {films} = this.props;
    const {posterSrc, title, id} = films;
    return (
      <article
        className="small-movie-card catalog__movies-card"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <div className="small-movie-card__image">
          <img src={posterSrc} alt={title} width="280" height="175" />
        </div>
        <h3 className="small-movie-card__title">
          <Link className="small-movie-card__link" to={`films/` + id}>{title}</Link>
        </h3>
      </article>
    );
  }
}

MovieCard.propTypes = {
  films: PropTypes.shape({
    title: PropTypes.string.isRequired,
    posterSrc: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  })
};

export default MovieCard;
