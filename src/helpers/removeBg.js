// // 67aCfdxdPLP9c4XLd7urh4dk

// // const axios = require('axios');
// // const FormData = require('form-data');
// // const fs = require('fs');
// import axios from 'axios';
// import FormData from 'form-data'
// import fs from 'fs'

// const removeBg = (img) => {
//   const formData = new FormData();
//   formData.append('size', 'auto');
//   formData.append('image_url', 'https://picsum.photos/200/300');

//   axios({
//     method: 'POST',
//     url: img,
//     data: formData,
//     responseType: 'arraybuffer',
//     headers: {
//       ...formData?.getHeaders(),
//       'X-Api-Key': '67aCfdxdPLP9c4XLd7urh4dk',
//     },
//     encoding: null
//   })
//     .then((response) => {
//       if (response.status != 200) {
//         fs.writeFileSync("no-bg.png", response.data);
//         console.log(response.data, 'data')
//         return console.error('Error:', response.status, response.statusText);
//       }
//     })
//     .catch((error) => {
//       return console.error('Request failed:', error);
//     });
// }

// export default removeBg;





const request = require('request');
const fs = require('fs');
const { initParams } = require('request');

let file_list = ['testfiles/blah.jpeg']
const api_url = 'https://api.backgroundremover.app/v1/convert/'
const results_url = 'https://api.backgroundremover.app/v1/results/'

function convertFiles(file_list) {
  let formData = {
    'lang': 'en',
    'convert_to': 'image-backgroundremover'
  };

  for (var i = 0; i < file_list.length; i++) {
    formData['files'] = fs.createReadStream(file_list[i]);
  }

  request({
    url: api_url,
    method: 'post',
    formData: formData,
    headers: {
      'Authorization': '<api_key>',
      "Content-Type": "multipart/form-data",
    }
  }, function (e, r, body) {
    getResults(JSON.parse(body));
  });
}

function getResults(data) {
  if (data.error) {
    return data.error;
  }

  request({
    url: results_url,
    method: 'post',
    formData: data
  }, function (e, r, body) {
    response = JSON.parse(body);

    if (!response.finished) {
      setTimeout(
        function () {
          getResults(data);
        }, 1000
      );
    }

    console.log(response);
  })
}

convertFiles(file_list);