import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Highlight from './Highlight'

class Projects extends Component {
  static propTypes = {
    projects: PropTypes.array.isRequired,
  }

  render() {
    return (
      <div>
        <h2>Other Projects</h2>
        {
          this.props.projects.map((project, i) => (
            <div key={`project-${i}`}>
              <h3>{project.name} | {project.title}</h3>
              <Highlight highlights={project.highlights} />
            </div>
          ))
        }
      </div>
    );
  }
}

export default Projects;