import axios from 'axios';

axios.defaults.validateStatus = function () {
  return true;
};

test('Deve chamar API', async function () {
  const res = await axios.post('http://localhost:3002/process_payment', {
    rideId: 'oie',
    amount: 50,
  });

  console.log(res);

  expect(res.data).toHaveProperty('transactionId');
});
