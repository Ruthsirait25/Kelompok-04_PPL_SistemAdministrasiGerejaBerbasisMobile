import axios from 'axios';
import assert from 'assert';

//get data

describe('API Test', () => {
  beforeEach(function () {
    this.timeout(5000);
  });

  it('should return status code 200', async function () {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/jemaatPindah');

      assert.strictEqual(response.status, 200);
      console.log('Response Data:', response.data);
    } catch (error) { 
      throw error;
    }
  });
});

// //create data


// describe('Create Artikel API Test', () => {
//   it('should create an article and return status code 200', async () => {
  
//     const postData = {
   
//       nama_lengkap:'Fresky tobing',
//       keterangan:'Hadir',
//     };

//     try {
//       const response = await axios.post('http://127.0.0.1:8000/api/rpp', postData);


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
//     it('should update an article and return status code 200', async () => {
//       const articleIdToUpdate = 11; // Update this with the correct article ID
  
//       const updateData = {
//         gambar: 'updated_gambar.jpg',
//         deskripsi: 'updated_contoh',
//         judul_artikel: 'Updated Sample Judul Artikel',
//       };
  
//       try {
//         const response = await axios.put(http://localhost:3002/api/updateartikel/${articleIdToUpdate}, updateData);
  
//         assert.strictEqual(response.status, 200);
//         assert.ok(response.data);
//         assert.strictEqual(response.data.id, articleIdToUpdate);
  
//         console.log('Article updated successfully:', response.data);
//       } catch (error) {
//         console.error('Error updating article:', error.message);
//         if (error.response) {
//           // Log additional information if available
//           console.error('Server responded with:', error.response.status, error.response.data);
//         }
//         throw error;
//       }
//     });
//   });

  // //delete data
  
  // describe('Delete Artikel API Test', () => {
  //   it('should delete an article and return status code 200', async () => {
  //     const articleIdToDelete = 1; 
  
  //     try {
  //       const response = await axios.delete('http://127.0.0.1:8000/api/deleteRpp', {
  //         data: { id_gereja: articleIdToDelete },
  //       });
  
  //       assert.strictEqual(response.status, 200);
  //       assert.ok(response.data); 
  //       console.log('Article deleted successfully:', response.data);
  //     } catch (error) {
  //       console.error('Error deleting article:', error.message);
  //       throw error;
  //     }
  //   });
  // });