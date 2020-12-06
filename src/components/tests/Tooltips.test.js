import { act } from "react-dom/test-utils";
import Tooltip from '../Tooltip';
import { render, unmountComponentAtNode } from "react-dom";
import Enzyme, { shallow  } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });



describe('Tooltip component', () => {
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

  it('returns empty object when there is null label', () => {
    const wrapper = shallow(<Tooltip details={data}
        fields={fields}
        label={null}
        />);
    expect(wrapper).toEqual({});
  });
  
  it('render popup in tooltip', () => {
    const wrapper = shallow(<Tooltip details={data}
        fields={fields}
        label={null}
        />);
    const renderUsers = wrapper.find("Popup");
    expect(renderUsers).toHaveLength(1);
  });

  });