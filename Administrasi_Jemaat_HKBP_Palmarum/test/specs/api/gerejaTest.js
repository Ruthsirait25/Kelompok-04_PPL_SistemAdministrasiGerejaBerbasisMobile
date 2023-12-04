import axios from 'axios';
import assert from 'assert';


//get data
describe('API Test', () => {
    beforeEach(function () {
      this.timeout(5000);
    });
  
    it('should return status code 200', async function () {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/gereja');
  
        assert.strictEqual(response.status, 200);
        console.log('Response Data:', response.data);
      } catch (error) { 
        throw error;
      }
    });
  });