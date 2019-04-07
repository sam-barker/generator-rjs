import React from 'react';
import { mount } from 'enzyme';
import App from '../../../src/components/app';

describe('<App />', () => {
  it('should render', () => {
    const app = mount(<App />);
    expect(app).toBeDefined();
  });
});
