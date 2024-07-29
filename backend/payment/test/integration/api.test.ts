import axios from 'axios';

axios.defaults.validateStatus = function () {
  return true;
};

test('should call controller correctly', async function () {
  await axios.post('http://localhost:3002/payment_transaction', {
    rideId: 'opa',
    amount: 50,
  });
});
