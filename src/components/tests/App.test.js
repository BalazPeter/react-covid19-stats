import Enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../../App';
Enzyme.configure({ adapter: new Adapter() });


// describe('A series of tests', () => {
//     const originalConsoleError = console.error;
  
//     beforeEach(() => {
//       console.error = jest.fn((msg) => {
//         if (msg.includes('Warning: useLayoutEffect does nothing on the server')) {
//           return null;
//         } else {
//           originalConsoleError(msg);
//         }
//       });
//     });
  
//     afterEach(() => {
//       console.error = originalConsoleError;
//     });
//     it('App snapshot', () => {
//         const wrapper = render(<App />);
//         expect(wrapper).toMatchSnapshot();
//     });
//   });
