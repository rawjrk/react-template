import React from "react";
import { screen, render, cleanup, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  beforeAll(() => {
    render(<App />);
  });

  it("should have the right message in the dom", () => {
    const message = "Hi, stranger!";
    expect(screen.getByText(message)).toBeInTheDocument();
  });

  afterAll(cleanup);
});