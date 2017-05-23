import React from 'react';
import { browserHistory } from 'react-router';
import {MainSection} from 'demo-ui';
import Debug from 'debug';
import 顯示 from '../../元素/顯示';
import './查.css';

var debug = Debug('hapuy:查');

export default class 查 extends React.Component {

  componentDidMount() {
    let { 語句, requestSearch } = this.props;
    requestSearch(語句);
  }

  送出 (e) {
    e.preventDefault();
    let tt = this.refs.tt;
    let { requestSearch } = this.props;
    requestSearch(tt.value);
    this.更新網址(tt.value);
  }

  更新網址(語句) {
    browserHistory.replace('/%E8%AC%9B/' +  encodeURI(語句));
  }

  render () {
    let { 語句 } = this.props;
    return (
      <MainSection>
        <form className='ui form'
          onSubmit={this.送出.bind(this)}>
          
          <div className="app block">
          <textarea defaultValue={語句} ref='tt' rows='3'/>
          </div>

          <div className='app clearing'>
          <button className='ui huge primary right floated button'
            type='submit'
          >查詢</button>
          </div>
        </form>
        <br/>
        <顯示/>
      </MainSection>
    );
  }
}
