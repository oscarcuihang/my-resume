import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Detail extends Component {
  static propTypes = {
    details: PropTypes.array,
  }

  renderDetails() {
    if (!this.props.details) {
      return null;
    }

    return this.props.details.map((detail, i) => {
      return (
        <ul key={`detail-${i}`}>
          <li>{detail.description}</li>
          {this.renderDetailLink(detail.link)}
        </ul>
      );
    });
  }

  renderDetailLink() {

  }

  render() {
    return (
      <div>
        {this.renderDetails()}
      </div>
    );
  }
}

export default Detail;