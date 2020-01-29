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

test("Players rendering", () => {
  const { getByTestId } = render(<App />);

  getByTestId("player-rendering");
});

test("contains Logo", () => {
  // ARRANGE
  const expectedLogoElements = 1;
  // const { getByText, getAllByText } = render(<App />);
  const container = render(<Navbar />);
  const getByText = container.getByText;
  const getAllByText = container.getAllByText;
  //  console.log(container);

  // ACT
  // getByText("Women's World Cup Players"); 
  const logoElements = getAllByText(/women's world cup players/i);

  // ASSERT
  expect(logoElements.length).toBe(expectedLogoElements);
});