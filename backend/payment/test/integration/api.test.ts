import axios from 'axios';

axios.defaults.validateStatus = function () {
  return true;
};

test('', async function () {});
