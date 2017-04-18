import React from 'react';
import PropTypes from 'prop-types';
import Debug from 'debug';

let debug = Debug('hapuy:顯示');

class 顯示 extends React.Component {
  render () {
    let { 語句 } = this.props;
    return (
        <span>
          {語句}
        </span>
      );
  }
}

顯示.propTypes = {
  語句: PropTypes.string,
};

export default 顯示;
