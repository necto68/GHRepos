import axios from 'axios';
import { API } from '../constants';

const GITHUB_AXIOS_INSTANCE = axios.create({
  baseURL: API.GITHUB_API_BASE_URL,
  timeout: 10000,
});

const getReposList = async searchString => {
  let response;

  try {
    response = await GITHUB_AXIOS_INSTANCE.request({
      url: '/search/repositories',
      method: 'get',
      params: {
        q: searchString,
        sort: 'stars',
        order: 'desc',
        per_page: '50',
      },
      responseType: 'json',
    });
    response = response.data;
  } catch (e) {
    response = {};
  }

  return response;
};

const getReposPullRequests = async (reposOwner, reposName) => {
  let response;

  try {
    response = await GITHUB_AXIOS_INSTANCE.request({
      url: `/repos/${reposOwner}/${reposName}/pulls`,
      method: 'get',
      params: {
        state: 'all',
        sort: 'created',
        direction: 'desc',
        per_page: '10',
      },
      responseType: 'json',
    });
    response = response.data;
  } catch (e) {
    response = {};
  }

  return response;
};

export default { getReposList, getReposPullRequests };
