import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Projects extends Component {
  static propTypes = {
    projects: PropTypes.array.isRequired,
  }

  render() {
    return (
      <div>
        Projects
      </div>
    );
  }
}

export default Projects;