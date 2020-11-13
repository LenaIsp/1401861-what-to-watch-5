import React, {PureComponent} from 'react';
import {TabsList} from "../../const";

const WithTabs = (Component) => {

  class WithTabsActive extends PureComponent {

    constructor(props) {
      super(props);
      this.state = {
        tabs: TabsList.OVERVIEW
      };
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick(evt, tabsName) {
      evt.preventDefault();
      this.setState({tabs: tabsName});
    }

    render() {
      return <Component
        {...this.props}
        handleClick={this.handleClick}
        state={this.state}
      />;
    }
  }

  return WithTabsActive;
};

export default WithTabs;
