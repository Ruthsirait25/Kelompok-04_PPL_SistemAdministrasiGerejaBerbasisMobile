import axios from 'axios';
import assert from 'assert';

//get data

// describe('API Test', () => {
//   beforeEach(function () {
//     this.timeout(5000);
//   });

//   it('should return status code 200', async function () {
//     try {
//       const response = await axios.get('http://127.0.0.1:8000/api/rpp');

//       assert.strictEqual(response.status, 200);
//       console.log('Response Data:', response.data);
//     } catch (error) { 
//       throw error;
//     }
//   });
// });

// //create data


// describe('Create Artikel API Test', () => {
//   it('should create an article and return status code 200', async () => {
  
//     const postData = {
   
//       nama_lengkap:'Fresky tobing',
//       keterangan:'Hadir',
//     };

//     try {
//       const response = await axios.post('http://127.0.0.1:8000/api/storeRpp', postData);


//       assert.strictEqual(response.status, 200);
//       assert.ok(response.data); 

//       console.log('Article created successfully:', response.data);
//     } catch (error) {
//       console.error('Error creating article:', error.message);
//       throw error;
//     }
//   });
// });

//update data

// describe('Update Artikel API Test', () => {
//   it('should update an article and return status code 200', async () => {
//     const updateRpp = 9; // Update this with the correct article ID

//     const dataRpp = {
//       tgl_warta_rpp: 'tgl_warta_rpp',
//       keterangan:  'keterangan'
//     };

//     try {
//       const response = await axios.put(`http://127.0.0.1:8000/api/updateRpp/${updateRpp}`, dataRpp);

//       assert.strictEqual(response.status, 200);
//       assert.ok(response.data); // Ensure response.data is not undefined

//       console.log('Article updated successfully:', response.data);
//     } catch (error) {
//       console.error('Error updating article:', error.message);
//       if (error.response) {
//         // Log additional information if available
//         console.error('Server responded with:', error.response.status, error.response.data);
//       }
//       throw error;
//     }
//   });
// });




  // //delete data
  
  describe('Delete Penjualan Tiket API Test', () => {
    it('should delete an article and return status code 200', async () => {
      const penjualantiketIdToDelete = 1; 
  
      try {
        const response = await axios.delete('http://127.0.0.1:8000/api/deleteRpp', {
          data: { id: penjualantiketIdToDelete },
        });
  
        assert.strictEqual(response.status, 200);
        assert.ok(response.data); 
        console.log('Penjualan Tiket deleted successfully:', response.data);
      } catch (error) {
        console.error('Error deleting Penjualan Tiket:', error.message);
        throw error;
      }
    });
  });

// Define headers
// const headers = {
//   'Content-Type': 'application/json',
//   'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
// };

// // Define data to send in the body
// const dataToSend = {
//   tgl_warta_rpp: 'addtglrpp',
//   keterangan: 'addketerangan',
//   // Menambahkan data yang kurang pada objek dataToSend
// };

// // Make the Axios request
// axios.post('http://127.0.0.1:8000/api/storeRpp', dataToSend, { headers })
//   .then(response => {
//     console.log(response.data);
//     // Menambahkan tanda kurung kurawal penutup untuk menyelesaikan blok then
//   })
//   .catch(error => {
//     console.error(error);
//     // Menambahkan tanda kurung kurawal penutup untuk menyelesaikan blok catch
//   });



// const dataToUpdate = {
//   tanggal_tahbisan: "tanggal",  // Sesuaikan dengan data yang ada di phpMyAdmin
//   tanggal_akhir_jawatan: "tanggalakhir",  // Sesuaikan dengan data yang ada di phpMyAdmin
//   jabatan: "jabatan",  // Sesuaikan dengan data yang ada di phpMyAdmin
//   id_status_pelayanan: "idstatus",  // Sesuaikan dengan data yang ada di phpMyAdmin
//   keterangan: "keterangan"  // Sesuaikan dengan data yang ada di phpMyAdmin
// };

// const id = 4;  // Sesuaikan dengan ID yang ada di phpMyAdmin

// axios.put(`http://127.0.0.1:8000/api/updatePelayanGereja/${id}`, dataToUpdate)
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.error(error);
//   });
