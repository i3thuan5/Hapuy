import React from 'react';
import PropTypes from 'prop-types';
import {
  Block,
  DownloadButton,
  PlayButton
} from 'demo-ui';
import Debug from 'debug';

let debug = Debug('hapuy:顯示');

class 顯示 extends React.Component {
  render () {
    let { 腔口, 語句 } = this.props;
    return (
        <Block>
          <DownloadButton 腔口={腔口} 語句={語句}/>
          <PlayButton 腔口={腔口} 分詞={語句}/>
          <span>{語句}</span>
        </Block>
      );
  }
}

顯示.propTypes = {
  語句: PropTypes.string,
};

export default 顯示;
