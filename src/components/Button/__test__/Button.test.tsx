import React from "react";
import { hydrateRoot } from "react-dom/client";
import Button from "../Button";
import { render, screen, fireEvent } from "@testing-library/react";

describe("testing of button componnent", () => {
  it("renders without crashing", () => {                      // it or test Both same
    const div = document.createElement("div");
    hydrateRoot(div, <Button count={0} label="testing button" />);
  });
  it("renders button correctly", () => {
    render(<Button count={0} label="testing button" />);
    expect(screen.getByTestId("button")).toHaveTextContent("testing button");
  });
});

describe("testing for count state and button in button component", () => {
  it("initial value of count in h1 is 0", () => {
    render(<Button count={0} label="testing button" />);
    const count = screen.getByTestId("count");
    expect(count).toBeInTheDocument();
    expect(count).toHaveTextContent("0");
  });

  it("testing button onclick event", () => {
    const handleClick = jest.fn();
    render(<Button count={0} onClick={handleClick} label="testing button" />);
    fireEvent.click(screen.getByTestId("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
