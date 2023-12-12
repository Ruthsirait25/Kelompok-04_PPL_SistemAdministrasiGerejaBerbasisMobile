// import axios from 'axios';
// import assert from 'assert';


// //get data
// describe('API Test', () => {
//     beforeEach(function () {
//       this.timeout(5000);
//     });
  
//     it('should return status code 200', async function () {
//       try {
//         const response = await axios.get('http://127.0.0.1:8000/api/kegiatan');
  
//         assert.strictEqual(response.status, 200);
//         console.log('Response Data:', response.data);
//       } catch (error) { 
//         throw error;
//       }
//     });
//   });

//post

// import axios from 'axios';
// import { expect } from 'chai';

// describe('Tambahkan API Kegiatan', () => {
//     it('Tambahkan Data Lengkap', function (done) {
//         // Set the parameters for the request
//         const requestData = {
//             nama_jenis_kegiatan: "Main aja",
//             tanggal_kegiatan: "2022-03-31",
//             waktu_kegiatan: "12:56:58",
//             lokasi_kegiatan: "Laguboti",
//             keterangan: "Tidak Ada"
//         };

//         // Make the API request using axios
//         axios.post('http://127.0.0.1:8000/api/storeKegiatan', requestData)
//             .then(response => {
//                 // Check the response status
//                 expect(response.status).to.equal(200);

//                 // Check the structure and content of the response data
//                 // Replace these with your actual response structure and expected values
//                 expect(response.data).to.have.property('code');
//                 expect(response.data.code).to.equal('200');

//                 expect(response.data).to.have.property('message');
//                 expect(response.data.message).to.equal('Success');

//                 done(); // Call done to indicate that the test is complete
//             })
//             .catch(error => done(error)); // If there's an error, call done with the error
//     }).timeout(5000); // Increase the timeout to 5 seconds

//     it('Tambahkan tanpa Data', function (done) {
//         // Set the parameters for the request
//         const requestData = {
//             nama_jenis_kegiatan: "Main aja",
//             tanggal_kegiatan: "2022-03-31",
//             waktu_kegiatan: "12:56:58",
//             lokasi_kegiatan: "Laguboti",
//             keterangan: "Tidak Ada"
//         };

//         // Make the API request using axios
//         axios.post('http://127.0.0.1:8000/api/storeKegiatan', requestData)
//             .then(response => {
//                 // Check the response status
//                 expect(response.status).to.equal(200);

//                 // Check the structure and content of the response data
//                 // Replace these with your actual response structure and expected values
//                 expect(response.data).to.have.property('code');
//                 expect(response.data.code).to.equal('200');

//                 expect(response.data).to.have.property('message');
//                 expect(response.data.message).to.equal('Success');

//                 done(); // Call done to indicate that the test is complete
//             })
//             .catch(error => done(error)); // If there's an error, call done with the error
//     }).timeout(5000); // Increase the timeout to 5 seconds
// });

