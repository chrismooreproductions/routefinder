import React from 'react';
import ReactDOM from 'react-dom';
import App from '..';
import SearchForm from '../components/SearchForm';

import Adapter from 'enzyme-adapter-react-16';
import { mount, shallow, configure } from 'enzyme';
import { renderHook, act } from '@testing-library/react-hooks';

configure({adapter: new Adapter()});

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  ReactDOM.unmountComponentAtNode(container);
  container = null;
});

it('renders the <App /> component without crashing', () => {
  ReactDOM.render(<App />, container);
});

// it('updates the ')

it('renders a <SearchForm /> component on app load', () => {
  const wrapper = mount(<App />);
  expect(wrapper.find(SearchForm)).toHaveLength(1);
  // // any...ugh
  // console.log(wrapper.debug());
  // const instance = wrapper.instance() as any;
  // console.log(instance.handleRouteChange());
  const { result } = renderHook(() => <App />)

  act(() => {
    result.current.handleRouteChange()
  })
})

it('')