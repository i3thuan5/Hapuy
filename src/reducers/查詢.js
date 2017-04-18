import { TSHA5 } from '../actions/action.type';

const 初始state = {
  語句: '',
};

const 查詢 = (state = 初始state, action) => {
  switch (action.type) {
    case TSHA5:
      return {
        語句: action.語句,
      };
    default:
      return state;
  }
};

export default 查詢;
