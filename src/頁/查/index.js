import { connect } from 'react-redux';
import Debug from 'debug';
import 查component from './查';
import { 查 } from '../../actions';

let debug = Debug('hapuy:action');

const matchDispatchToProps = (dispatch) => ({
    requestSearch: (語句) => (
        dispatch(查(語句))
    ),
  });

const Container查詢 = connect(
  null,
  matchDispatchToProps
)(查component);

export default Container查詢;
