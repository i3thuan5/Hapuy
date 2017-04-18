import nock from 'nock';
import { expect } from 'chai';
import sinon from 'sinon';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  REQUEST_HANLO,
  RECIEVE_HANLO,
  RECIEVE_ERROR_HANLO
} from '../../src/actions/action.type';
import { 是否可以請求查詢, 遠端查詢 } from '../../src/actions/';
import { 後端網址, 標漢字音標 } from '../../src/後端網址';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Action', () => {
  it('huat4-im1', () => {
    const store = mockStore({
      '語句': 'Maolahay kako tiso wanan.',
    });

    const expectActions = [
      { type: IM1, '語句': 'Maolahay kako tiso wanan.' },
    ];

    return store.dispatch(遠端查詢('逐家tsò-hué來chhit4-tho5！'))
      .then(()=> {
        expect(store.getActions()).to.eql(expectActions);
      });
  });
});
