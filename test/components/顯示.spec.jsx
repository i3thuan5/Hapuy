import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import 顯示 from '../../src/元素/顯示/顯示';

let setup = (查詢結果={}) => {
  const component = shallow(
    <顯示 選項={選項} 查詢結果={查詢結果}/>
    );
  return {
    component: component,
    span: component.find('span'),
  };
};

describe('Component', () => {
  describe('顯示', () => {
    it('should render Pangcah', () => {
      const { span } = setup(
      {
        '語句': 'Maolahay kako tiso wanan.'
      });
      expect(span.text()).match(/^Maolahay kako tiso wanan\./);
    });
  });
});
