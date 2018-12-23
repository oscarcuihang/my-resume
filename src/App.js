import React, { Component } from 'react';
import Layout from './components/layouts/Layout'
import {IntlProvider} from "react-intl";
import { addLocaleData } from "react-intl";
import locale_en from 'react-intl/locale-data/en';
import locale_zh from 'react-intl/locale-data/zh';
import messages_zh from "./translations/zh.json";
import messages_en from "./translations/en.json";
import { Radio } from 'antd';
import './App.css';

addLocaleData([...locale_en, ...locale_zh]);

const messages = {
  'zh': messages_zh,
  'en': messages_en
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: 'en'
    };
  }

  changeLocale = (e) => {
    const localeValue = e.target.value;
    this.setState({ language: localeValue });
  }

  render() {
    return (
      <IntlProvider locale={this.state.language} messages={messages[this.state.language]}>
        <div>
          <div>
            <Radio.Group defaultValue={undefined} onChange={this.changeLocale}>
              <Radio.Button key='en' value='en'>English</Radio.Button>
              <Radio.Button key='zh' value='zh'>中文</Radio.Button>
            </Radio.Group>
          </div>
          <Layout locale={this.state.language} />
        </div>
      </IntlProvider>
    );
  }
}

export default App;


