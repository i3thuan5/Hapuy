import { expect } from 'chai';
import { TSHA5 } from '../../src/actions/action.type';
import { 查 } from '../../src/actions/';

describe('Action', () => {
  it('huat4-im1', () => {
    const expectActions =  {
      type: TSHA5, '語句': 'Maolahay kako tiso wanan.',
    };

    expect(查('Maolahay kako tiso wanan.'))
    .to
    .eql(expectActions);
  });
});
