import React from 'react';
import ReactDOM from 'react-dom';
import { render } from "@testing-library/react";
import App from './App';
import Navbar from './components/Navbar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("Toggle switch", () => {
  const { getByTestId } = render(<Navbar />);

  getByTestId("dark-mode__toggle");
});