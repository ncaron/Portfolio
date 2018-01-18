import React, { Component } from 'react';
import { toggleSidebar } from './helpers/toggleSidebar';
import Nav from './Nav';
import Footer from './Footer';

class Sidebar extends Component {
  constructor() {
    super();

    this.state = { sidebarToggled: false };
    this.triggerSidebar = this.triggerSidebar.bind(this);
  }

  triggerSidebar() {
    this.state.sidebarToggled ? this.setState({ sidebarToggled: false })
                              : this.setState({ sidebarToggled: true });

    toggleSidebar();
  }

  render() {
    return (
      <div>
        <div id="hamburger" className="hamburger" onClick={ this.triggerSidebar }>
          <span />
          <span />
          <span />
        </div>

        <div className="sidebar">
          <Nav triggerSidebar={ this.triggerSidebar }/>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Sidebar;
