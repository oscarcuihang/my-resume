import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Educations extends Component {
  static propTypes = {
    educations: PropTypes.array.isRequired,
  }

  render() {
    return (
      <div>
        Educations
      </div>
    );
  }
}

export default Educations;