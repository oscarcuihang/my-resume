import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Highlight from './Highlight'

class Experiences extends Component {
  static propTypes = {
    experiences: PropTypes.array.isRequired,
  }

  t(id) {
    return this.context.intl.formatMessage({id: id});
  }

  render() {
    return (
      <div>
      <h2>{this.t('experience.header')}</h2>
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
Experiences.contextTypes ={ intl: PropTypes.object.isRequired };
export default Experiences;