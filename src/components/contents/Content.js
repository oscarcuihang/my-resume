import React, { Component } from 'react';
import { Layout } from 'antd';
import PropTypes from 'prop-types'

import Education from './Educations'
import Projects from './Projects'
import Experiences from './Experiences'

const { Content } = Layout;

class AppContent extends Component {
  static propTypes = {
    myData: PropTypes.object.isRequired,
  }

  render() {
    return (
      <Content>
        <Education educations={this.props.myData.educations}/>
        <Projects projects={this.props.myData.otherProjects}/>
        <Experiences experiences={this.props.myData.professionalExperiences}/>
      </Content>
    );
  }
}

export default AppContent;