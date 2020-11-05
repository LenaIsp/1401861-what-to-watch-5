import React, {PureComponent} from 'react';

const withActiveItem = (Component) => {

  class WithActiveItem extends PureComponent {

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
      return <Component
        {...this.props}
        isActive={this.state.isActive}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      />;
    }
  }

  return WithActiveItem;
};

export default withActiveItem;
