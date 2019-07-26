
import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

configure({ adapter: new Adapter() });

describe('App Test', () => {
  // let instance;
  let shallowComponent;
  beforeEach(() => {
    shallowComponent = shallow(<App />);
    // instance = shallowComponent.instance();
  });

  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('should render once', () => {
    expect(shallowComponent.length).toEqual(1)
  });

  // test('should set error to true and message', () => {
  //   const event = {
  //     preventDefault: () => {},
  //   };
  //   shallowComponent.setState({ limit: 20000 });
  //   instance.generateRandomPhoneNumber(event);
  //   const state = shallowComponent.state();
  //   expect(state.limit).toEqual(20000);
  //   expect(state.error).toBe(true);
  //   expect(state.message).toBe("The number entered exceeds/below the accepted limit");
  // });

});
