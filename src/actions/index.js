import superagent from 'superagent-bluebird-promise';
import { TSHA5 } from './action.type';

export const 查 = 語句 => ({
  type: TSHA5,
  語句,
});
