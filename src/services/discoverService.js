import * as httpRequest from '~/utils/httpRequest';

export const getDiscover = async (region = 'VN', offset = '20') => {
  const discoverOptions = {
    method: 'GET',
    url: 'https://tiktok-all-in-one.p.rapidapi.com/discover',
    params: { region, offset },
    headers: {
      'X-RapidAPI-Key': '4ad34b516cmsh9be8d0d889bb84cp1030f9jsn2446e27d5d3a',
      'X-RapidAPI-Host': 'tiktok-all-in-one.p.rapidapi.com',
    },
  };
  const data = await httpRequest.get(discoverOptions);
  return data;
};
