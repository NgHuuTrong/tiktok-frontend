import * as httpRequest from '~/utils/httpRequest';

export const getUserInfo = async (id) => {
  const userInfoOptions = {
    method: 'GET',
    url: 'https://tiktok-all-in-one.p.rapidapi.com/user',
    params: { id },
    headers: {
      'X-RapidAPI-Key': '4ad34b516cmsh9be8d0d889bb84cp1030f9jsn2446e27d5d3a',
      'X-RapidAPI-Host': 'tiktok-all-in-one.p.rapidapi.com',
    },
  };
  const data = await httpRequest.get(userInfoOptions);
  return data;
};
