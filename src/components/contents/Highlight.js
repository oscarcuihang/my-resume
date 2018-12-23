import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Detail from './Detail'

class Highlight extends Component {
  static propTypes = {
    highlights: PropTypes.array.isRequired,
  }

  render() {
    return (
      <div>
        {
          this.props.highlights.map((highlight, i) => (
            <div key={`highlight-${i}`}>
              <h4>{highlight.description}</h4>
              <Detail details={highlight.details} />
            </div>
          ))
        }
      </div>
    );
  }
}

export default Highlight;