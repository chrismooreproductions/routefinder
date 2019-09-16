import React from 'react';
import ReactDOM from 'react-dom';
import SearchForm from '../components/SearchForm';

import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import sinon from 'sinon';

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
  const input = wrapper.exists('.search-form--input-field');
  expect(input).toHaveLength(2);
  console.log(input);
})