import React from 'react';
import ReactDOM from 'react-dom';
import App from '..';
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

it('renders without crashing', () => {
  ReactDOM.render(<App />, container);
});

it('renders a SearchForm component on app load', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(SearchForm)).toHaveLength(1);
})