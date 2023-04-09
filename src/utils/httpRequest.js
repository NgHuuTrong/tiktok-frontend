// import axios from 'axios';
// const httpRequest = axios.create({
//   baseURL: process.env.REACT_APP_BASE_URL,
// });

// export const get = async (path, option = {}) => {
//   const response = await httpRequest.get(path, option);
//   return response.data;
// };
// export default httpRequest;

// const searchRequest = {
//   method: 'GET',
//   url: 'https://tiktok-video-no-watermark2.p.rapidapi.com/user/search',
//   params: { keywords: 'tiktok', count: '10', cursor: '0' },
//   headers: {
//     'X-RapidAPI-Key': '4ad34b516cmsh9be8d0d889bb84cp1030f9jsn2446e27d5d3a',
//     'X-RapidAPI-Host': 'tiktok-video-no-watermark2.p.rapidapi.com',
//   },
// };
import axios from 'axios';

export const get = async (options) => {
  const response = await axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
    });
  return response.data;
};
