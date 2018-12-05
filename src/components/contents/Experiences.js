import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Experiences extends Component {
  static propTypes = {
    experiences: PropTypes.array.isRequired,
  }

  render() {
    return (
      <div>
        Experiences
      </div>
    );
  }
}

export default Experiences;