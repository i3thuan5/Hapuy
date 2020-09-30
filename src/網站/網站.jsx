import React from 'react';
import {Layout} from 'demo-ui';
import 頁頭 from './頁頭';
import 頁尾 from './頁尾';
import Debug from 'debug';
import {例句選擇, 語言選擇} from '../元素/語言選擇'


var debug = Debug('hapuy:網站');

export default class 網站 extends React.Component {

  render () {
    let { ku } = this.props.params;

    return (
        <Layout>
          <頁頭/>
          {
            React.cloneElement(
              this.props.children,
              {
                語句: ku || 例句選擇(),
              }
            )
          }
          <頁尾/>
        </Layout>
      );
  }
}

