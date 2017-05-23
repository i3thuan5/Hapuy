import React from 'react';
import PropTypes from 'prop-types';
import {
  Block,
  DownloadButton,
  PlayButton,
  意傳服務
} from 'demo-ui';
import Debug from 'debug';

let debug = Debug('hapuy:顯示');

class 顯示 extends React.Component {
  render () {
    const { 腔口, 語句 } = this.props;
    const src = 意傳服務.文本直接合成({腔口, 語句}); 
    return (
        <Block>
          <DownloadButton src={src}/>
          <PlayButton src={src}/>
          <span>{語句}</span>
        </Block>
      );
  }
}

顯示.propTypes = {
  語句: PropTypes.string,
};

export default 顯示;
