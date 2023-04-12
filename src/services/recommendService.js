import * as httpRequest from '~/utils/httpRequest';

export const getRecommend = async (region = 'VN') => {
  const recommendOptions = {
    method: 'GET',
    url: 'https://tiktok-all-in-one.p.rapidapi.com/recommend',
    params: { region },
    headers: {
      'X-RapidAPI-Key': '4ad34b516cmsh9be8d0d889bb84cp1030f9jsn2446e27d5d3a',
      'X-RapidAPI-Host': 'tiktok-all-in-one.p.rapidapi.com',
    },
  };
  const data = await httpRequest.get(recommendOptions);
  return data;
};
