import { connect } from 'react-redux';
import 合成結果 from './合成結果';

const matchStateToProps = (state) => ({
  腔口: 'Pangcah',
  語句: state.查詢.語句,
});

const Container合成結果 = connect(
  matchStateToProps
)(合成結果);

export default Container合成結果;
