import renderer from 'react-test-renderer';
import Operate from '../logic/operate';
import Calculator from '../pages/calculator';

test('Render Calculator', () => {
  const renderCalculator = renderer.create(<Calculator />).toJSON();
  expect(renderCalculator).toMatchSnapshot();
});

test('Multiply 1, 2 result will be 2', () => {
  const result = Operate(1, 2, 'x');
  expect(result).toBe('2');
});
