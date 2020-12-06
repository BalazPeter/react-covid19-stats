import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import StatTable from "../StatTable";

let container = null;
const fakeUser = [
  {
    "state_ut": "Maharashtra",
    "confirmed": 1757520,
    "active": 80221,
    "recovered": 1630111,
    "deaths": 46202,
    "coordinates": {
      "latitude": 19.66328,
      "longitude": 75.300293
    },
    "size": 55,
    "color": "rgba(5, 155, 247, 0.7)"
  },
  {
    "state_ut": "Karnataka",
    "confirmed": 865931,
    "active": 25146,
    "recovered": 829188,
    "deaths": 11578,
    "coordinates": {
      "latitude": 15.317277,
      "longitude": 75.71389
    },
    "size": 35,
    "color": "rgba(5, 155, 247, 0.7)"
  },
];

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders user data", async () => {
  var tableHead = "State/UTConfirmedsorted descendingActiveRecoveredDeceasedMaharashtra175752080221163011146202Karnataka8659312514682918811578";
  var bitSortedTable = "State/UTConfirmedsorted descendingActiveRecoveredDeceased";
    jest.spyOn(global, "fetch").mockImplementation(() =>    
    Promise.resolve({      
        json: () => Promise.resolve(fakeUser)    
    })  
    );
  await act(async () => {
    render(<StatTable rows={fakeUser} />, container);
  });
  expect(container.firstChild.querySelector("table").textContent).toBe(tableHead);
  expect(container.firstChild.querySelector("thead").textContent).toBe(bitSortedTable);
  expect(container.querySelector("span").textContent).toBe("State/UT");
  expect(container.firstChild).toHaveClass('makeStyles-root-1')
  // remove the mock to ensure tests are completely isolated  
  global.fetch.mockRestore();
});

