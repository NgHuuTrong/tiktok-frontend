import * as httpRequest from '~/utils/httpRequest';

export const getFeed = async (region = 'VN', device_id = '7214293347836528130') => {
  const feedOptions = {
    method: 'GET',
    url: 'https://tiktok-all-in-one.p.rapidapi.com/feed',
    params: { region, device_id },
    headers: {
      'X-RapidAPI-Key': '4ad34b516cmsh9be8d0d889bb84cp1030f9jsn2446e27d5d3a',
      'X-RapidAPI-Host': 'tiktok-all-in-one.p.rapidapi.com',
    },
  };
  const data = await httpRequest.get(feedOptions);
  return data;
};
