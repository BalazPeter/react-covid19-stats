import React from "react";
import StatTable from "../StatTable";
import Enzyme, { mount,shallow ,render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

let wrapper
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
  ];

beforeEach(() => {
    wrapper = mount(<StatTable rows={fakeUser} />);
  });



describe('StatTable component', () => {
const mockUsersLists = jest.fn(() => fakeUser || []);
const nullData = [];
  it('returns length when there is data', () => {
    const wrapper = shallow(<StatTable rows={fakeUser} />);
    const renderUsers = wrapper.find("div");
    expect(renderUsers).toHaveLength(1);
  });

  it('returns empty when there is empty datas', () => {
    const wrapper = shallow(<StatTable rows={nullData} />);
    const renderUsers = wrapper.find("table");
    expect(renderUsers.exists()).toBe(false);
    });

  // it('returns null when there is no data', () => {
  //   const wrapper = shallow(<StatTable rows={null} />);
  //   expect(wrapper.isEmptyRender()).toBe(true);
  //   });
});

