import React from 'react';
import ReactDOM from 'react-dom';
import Map from '../Map';
import App from "../../App";
import { getQueriesForElement } from '@testing-library/react';
import axios from "axios";
import Enzyme, { render, mockPropsForComponent } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

const data = [
    {
      "state_ut": "Maharashtra",
      "confirmed": 1749777,
      "active": 84386,
      "recovered": 1618380,
      "deaths": 46034,
      "coordinates": {
        "latitude": 19.66328,
        "longitude": 75.300293
      },
      "size": 55,
      "color": "rgba(5, 155, 247, 0.7)"
    },
  ];


  
it("Render Map without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Map colors={["rgba(5, 155, 247, 0.7)","rgba(233,30,99,0.7)","rgba(53,211,156,0.7)"]}
    data={data}
    fields={["confirmed", "deaths", "recovered"]}
    query={"confirmed"} />, div);
    ReactDOM.unmountComponentAtNode(div);
})

it("Render app on div element and check apis", () => {
    const root = document.createElement("div");
    ReactDOM.render(<App />, root);
    const { getByText, getByLabelText } = getQueriesForElement(root);
    var apidata = (App.setData = jest.fn());
    jest.spyOn(axios, 'get').mockResolvedValueOnce({
      data: [
        {
          "state_ut": "Maharashtra",
          "confirmed": 1749777,
          "active": 84386,
          "recovered": 1618380,
          "deaths": 46034,
          "coordinates": {
            "latitude": 19.66328,
            "longitude": 75.300293
          },
          "size": 55,
          "color": "rgba(5, 155, 247, 0.7)"
        }
      ]
    });

    expect(root.querySelector("h4").textContent).toBe("Covid19 Tracker(India)");
    ReactDOM.unmountComponentAtNode(root);
})


