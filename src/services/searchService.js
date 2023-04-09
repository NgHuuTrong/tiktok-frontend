import * as httpRequest from '~/utils/httpRequest';

export const search = async (keywords, count, cursor = '0') => {
  const searchOptions = {
    method: 'GET',
    url: `${process.env.REACT_APP_BASE_URL}user/search`,
    params: { keywords, count, cursor },
    headers: {
      'X-RapidAPI-Key': '4ad34b516cmsh9be8d0d889bb84cp1030f9jsn2446e27d5d3a',
      'X-RapidAPI-Host': 'tiktok-video-no-watermark2.p.rapidapi.com',
    },
  };

  const data = await httpRequest.get(searchOptions);
  return data;
};
