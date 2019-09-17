import React from 'react';
import ReactDOM from 'react-dom';
import SearchForm from '../components/SearchForm';

import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

const searchFormProps = {
  getRoutes: () => {},
  route: { routeStart: '', routeEnd: '' },
  handleRouteChange: () => {}
}

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  ReactDOM.unmountComponentAtNode(container);
  container = null;
});

it('renders a SearchForm without crashing', () => {
  ReactDOM.render(<SearchForm {...searchFormProps} />, container);
});

it('renders two input fields and a submit', () => {
  const wrapper = shallow(<SearchForm {...searchFormProps} />);
  expect(wrapper.find('.search-form--input-field').length).toBe(2)
  expect(wrapper.find('.search-form--submit-button').length).toBe(1)
})