import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import 顯示 from '../../src/元素/顯示/顯示';

let setup = (語句) => {
  const component = shallow(
    <顯示 語句={語句}/>
    );
  return {
    component: component,
    span: component.find('span'),
  };
};

describe('Component', () => {
  describe('顯示', () => {
    it('should render Pangcah', () => {
      const { component,span } = setup(
      'Maolahay kako tiso wanan.'
      );
      expect(component.text()).match(/Maolahay kako tiso wanan\./);
      expect(span.text()).match(/^Maolahay kako tiso wanan\./);
    });
  });
});
