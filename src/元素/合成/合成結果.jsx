import React from 'react';
import Debug from 'debug';
import { 後端合成網址 } from '../../後端網址';

var debug = Debug('hapuy:合成結果');

export default class 合成結果 extends React.Component {

  componentWillReceiveProps (nextProps) {
    if (nextProps.語句 === this.props.語句) return;
    let 音檔 = this.refs.合成音檔;
    音檔.load();
  }

  play() {
    let 音檔 = this.refs.合成音檔;
    音檔.play();
  }

  render () {
    let {腔口,語句}=this.props;
    return (
        <span className='HuatIm'>
          <audio ref="合成音檔">
            <source type="audio/wav"
               src={後端合成網址(腔口,語句)}/>
          </audio>
          <button onClick={this.play.bind(this)}
            className='ui compact icon massive button'>
            <i className='icon play'></i>
          </button>
        </span>
      );
  }
}
