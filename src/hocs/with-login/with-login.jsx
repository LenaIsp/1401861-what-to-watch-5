import React, {PureComponent} from 'react';

const withLogin = (Component) => {
  class WithLogin extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        email: ``,
        password: ``
      };

      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(evt) {
      if (evt.target.name.includes(`email`)) {
        this.setState({
          email: evt.target.value
        });
      } else if (evt.target.name.includes(`password`)) {
        this.setState({
          password: evt.target.value
        });
      }
    }

    render() {
      const {email, password} = this.state;

      return (
        <Component {...this.props}
          email={email}
          password={password}
          handleChange={this.handleChange}
        />
      );
    }
  }

  return WithLogin;
};

export default withLogin;
