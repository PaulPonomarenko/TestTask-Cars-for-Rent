import axios from 'axios';

const BASE_URL = 'https://6524c1c6ea560a22a4ea1126.mockapi.io';

axios.defaults.baseURL = BASE_URL;

export const getAllCars = async () => {
  const res = await axios.get(`/advert`);

  return res.data;
};
