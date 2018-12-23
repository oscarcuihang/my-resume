import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Highlight from './Highlight'

class Experiences extends Component {
  static propTypes = {
    experiences: PropTypes.array.isRequired,
  }

  render() {
    return (
      <div>
      <h2>Experiences</h2>
        {
          this.props.experiences.map((experience, i) => (
            <div key={`experience-${i}`}>
              <h3>{experience.title} | {experience.employer}</h3>
              <Highlight highlights={experience.highlights} />
            </div>
          ))
        }
      </div>
    );
  }
}

export default Experiences;