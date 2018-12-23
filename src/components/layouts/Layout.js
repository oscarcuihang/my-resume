import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Header from './Header'
import Footer from './Footer'
import Content from '../../components/contents/Content'
import { Layout } from 'antd';

class AppLayout extends Component {
  state = {
    myData: null,
  }

  static propTypes = {
    locale: PropTypes.string.isRequired,
  }
  componentDidMount() {
    this.getResume();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.locale !== this.props.locale) {
      this.getResume();
    }
  }

  getResume() {
    const url = this.context.intl.formatMessage({id: 'app.resumeURL'});
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

AppLayout.contextTypes ={ intl: PropTypes.object.isRequired };
export default AppLayout;
