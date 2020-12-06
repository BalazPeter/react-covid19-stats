import { act } from "react-dom/test-utils";
import Tooltip from '../Tooltip';
import { render, unmountComponentAtNode } from "react-dom";
import Enzyme, { shallow  } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });



describe('StatTable component', () => {
    let cont = null;
  const data = 
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
    "color": "rgba(5, 155, 247, 0.7)",
    "fields":[
      "confirmed", 
      "deaths", 
      "recovered"
      ]
  };
      
  const fields = {"fields":[
  "confirmed", 
  "deaths", 
  "recovered"
  ]};

  it('returns length when there is data', () => {
    const wrapper = shallow(<Tooltip details={data}
        fields={fields}
        label={null}
        />);
    expect(wrapper).toEqual({});
  });
  
  it('returns length when there is data', () => {
    const wrapper = shallow(<Tooltip details={data}
        fields={fields}
        label={null}
        />);
    const renderUsers = wrapper.find("Popup");
    expect(renderUsers).toHaveLength(1);
  });

//   it("renders user data", async () => {
//     const container = document.createElement("div");
//     document.body.appendChild(container);
//     await act(async () => {
//     render(<Tooltip details={data}
//         fields={fields}
//         label={null}
//         />, container);
//     expect(container.querySelector("span").textContent).toBe("State/UT");
    
//     });

  });