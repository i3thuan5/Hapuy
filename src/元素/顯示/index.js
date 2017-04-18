import { connect } from 'react-redux';
import 顯示 from './顯示';

const matchStateToProps = (state) => ({
  語句: state.查詢.語句,
});

const Container顯示 = connect(
  matchStateToProps
)(顯示);

export default Container顯示;
