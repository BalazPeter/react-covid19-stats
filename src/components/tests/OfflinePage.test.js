import { SvgIcon } from "@material-ui/core";
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import OfflinePage from "../OfflinePage";

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

it("render an offline page with content", () => {
    act(() => {
      render(<OfflinePage />, container);
    });
    expect(container.textContent).toBe("Looks like you lost your connection. Please check it and try again.");
});
