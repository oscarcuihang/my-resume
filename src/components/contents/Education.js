import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Educations extends Component {
  static propTypes = {
    educations: PropTypes.array.isRequired,
  }
  t(id) {
    return this.context.intl.formatMessage({id: id});
  }
  render() {
    return (
      <div>
        <h2>{this.t('education.header')}</h2>
      </div>
    );
  }
}
Educations.contextTypes ={ intl: PropTypes.object.isRequired };

export default Educations;