import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Tooltip from '../Tooltip';
import StatGrid from "../StatGrid";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders StatGrid with or without a parameters", () => {
  act(() => {
      render(<StatGrid />, container);  
    });  
  expect(container.textContent).toBe("");

  act(() => {
    render(<StatGrid stattext="Deceased" />, container);
  });
  expect(container.textContent).toBe("Deceased");

  act(() => {
    render(<StatGrid stattext="Deceased"
    totalcount={320}
    latestcount={420}
    className={"NameOfClass"}
    />, container);
  });
  expect(container.textContent).toBe("Deceased320420");
  expect(container.firstChild).toHaveClass('NameOfClass')
});

