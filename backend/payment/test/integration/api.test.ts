import axios from 'axios';

axios.defaults.validateStatus = function () {
  return true;
};

test('should call controller correctly', async function () {
  const result = await axios.post('http://localhost:3002/payment', {
    opa: 'oiiii',
  });

  console.log(result.data);
  expect(result.data).toBe({ opa: 'oiiii' });
});
