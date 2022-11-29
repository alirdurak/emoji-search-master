import React from 'react'
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "./App";
import Header from "./Header";


test("Emoji Copy render", () => {
    render(<App/>);
    const clicks = screen.getAllByTestId("row");
    expect(clicks[0]).toHaveAttribute('data-clipboard-text');
});
test("Uygulama ilk açıldığında emoji listesinin başarılı bir şekilde render edilmesi", () => {
  render(<App />);
  const items = screen.getAllByText(/Click to copy emoji/i);
  const item = screen.getByText("Relaxed");
  expect(item).toBeInTheDocument();
  expect(items.length).toEqual(20);
});
test("Emoji sayfasının başarılı bir şekilde filitrelenmesi", () => {
  render(<App />);
  const inputText = screen.getByText("100");
  expect(inputText).toBeInTheDocument("100");
});
test("Header render", () => {
  render(<Header/>);

  const headerDom = screen.getByText(/Emoji Search/i);
  expect(headerDom).toBeInTheDocument();
})
