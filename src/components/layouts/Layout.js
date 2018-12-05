import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import Content from '../../components/contents/Content'
import { Layout } from 'antd';

class AppLayout extends Component {
  state = {
    myData: null,
    locale: 'en',
  }

  componentDidMount() {
    const url = "https://raw.githubusercontent.com/oscarcuihang/resume/master/resumeEN.json";
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ myData: data }));
  }

  renderLayout() {
    if (this.state.myData !== null) {
      return (
        <Layout>
          <Header contacts={this.state.myData.contacts}/>
          <Content myData={this.state.myData}/>
          <Footer />
        </Layout>
      );
    }
    return null;
  }

  render() {
    return (
      <div>
        {this.renderLayout()}
      </div>
    );
  }
}

export default AppLayout;