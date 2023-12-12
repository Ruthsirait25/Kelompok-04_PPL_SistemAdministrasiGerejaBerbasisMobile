import axios from 'axios';
import assert from 'assert';

//get data

// describe('API Test', () => {
//   beforeEach(function () {
//     this.timeout(5000);
//   });

//   it('should return status code 200', async function () {
//     try {
//       const response = await axios.get('http://127.0.0.1:8000/api/pelayanGereja');

//       assert.strictEqual(response.status, 200);
//       console.log('Response Data:', response.data);
//     } catch (error) {
//       throw error;
//     }
//   });
// });



// const dataToUpdate = {
//   // $id_pelayan:"updatepelayan",
//   // $id_jemaat:"updatejemaat",
//   tanggal_tahbisan: "tanggal",
//   tanggal_akhir_jawatan: "tanggalakhir",
//   jabatan: "jabatan",
//   keterangan: "keterangan"
// };

// const id = 1;

// axios.put(`http://127.0.0.1:8000/api/updatePelayanGereja/${id}`, dataToUpdate)
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

describe('Update Artikel API Test', () => {
  it('should update an article and return status code 200', async () => {
    const updateRpp = 1; // Update this with the correct article ID
    const dataRpp = {
  tanggal_tahbisan: "tanggal",
  tanggal_akhir_jawatan: "tanggalakhir",
  jabatan: "jabatan",
  keterangan: "keterangan"
    };

    try {
      const response = await axios.put(`http://127.0.0.1:8000/api/updatePelayanGereja/${updateRpp}`, dataRpp);

      assert.strictEqual(response.status, 200);
      assert.ok(response.data); // Ensure response.data is not undefined

      console.log('Article updated successfully:', response.data);
    } catch (error) {
      console.error('Error updating article:', error.message);
      if (error.response) {
        // Log additional information if available
        console.error('Server responded with:', error.response.status, error.response.data);
      }
      throw error;
    }
  });
});
