import axios from 'axios';

const headers = {
  'Content-Type': 'application/json',
  'Authorization': 'YOUR_ACCESS_TOKEN',
};

const dataToSend = {
  "tgl_warta_rpp": "addtglrpp",
  "keterangan": "addketerangan"
}


async function postData() {
  try {
    const response = await axios.post('http://127.0.0.1:8000/api/storeRpp', JSON.stringify(dataToSend), { headers });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

postData();
