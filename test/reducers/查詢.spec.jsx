import { expect } from 'chai';
import { TSHA5 } from '../../src/actions/action.type';
import 查詢 from '../../src/reducers/查詢';

describe('Reducer', () => {
  let 初始狀態規範 = {
      語句: '',
    };

  it('has initial state', ()=> {
    expect(查詢(undefined, {}))
    .to
    .eql(初始狀態規範);
  });

  it('recognizes action IM1', ()=> {
    expect(查詢(undefined, {
      type: TSHA5,
      語句: 'Maolahay kako tiso wanan.',
    }))
    .to
    .eql({
      語句: 'Maolahay kako tiso wanan.',
    });
  });

  it('ignores other action', ()=> {
    expect(查詢(undefined, { type: 'HELLO_SUI2' }))
    .to
    .eql(初始狀態規範);
  });
});
