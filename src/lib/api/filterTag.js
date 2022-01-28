import client from './client';
import { API } from '../../config';

export const getFilterTag = () => {
  return client.get(`${API.baseUrl}data/tagList.json`);
};
