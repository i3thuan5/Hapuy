
import React from 'react';
import { Link } from 'react-router';

export default class ToLam extends React.Component {
  render () {
    return (
      <footer className='app footer inverted'>
        <div className='ui stackable menu container inverted'>
          <a className='item' href='https://xn--v0qr21b.xn--kpry57d/'>意傳文化科技</a>
          <a className='item' href='http://docs.tai5uan5gian5gi2hok8bu7.apiary.io/'>服務API</a>
          <a className='item' href='https://github.com/i3thuan5/hapuy'>前端網站程式碼</a>
          <a className='item' href='https://github.com/sih4sing5hong5/tai5-uan5_gian5-gi2_hok8-bu7/wiki'>後端服務程式碼</a>
          <a className='item' href='https://github.com/sih4sing5hong5/tai5-uan5_gian5-gi2_hok8-bu7/wiki/Taiwanese-Corpus%E8%AA%9E%E6%96%99'>語料來源</a>
        </div>
      </footer>
    );
  }
}
