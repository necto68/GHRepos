import { GITHUB_API } from '../utils';

export const SET_REPOS_LIST = 'SET_REPOS_LIST';
const setReposList = reposList => ({
  type: SET_REPOS_LIST,
  reposList,
  isReposListError: false,
});

export const SET_REPOS_LIST_ERROR = 'SET_REPOS_LIST_ERROR';
const setReposListError = () => ({
  type: SET_REPOS_LIST_ERROR,
  isReposListError: true,
});

export const SET_LOADING_REPOS_LIST = 'SET_LOADING_REPOS_LIST';
const setLoadingReposList = isLoadingReposList => ({
  type: SET_LOADING_REPOS_LIST,
  isLoadingReposList,
});

export const fetchReposList = searchString => async dispatch => {
  dispatch(setLoadingReposList(true));

  const repos = await GITHUB_API.getReposList(searchString);

  if (repos.items) {
    dispatch(setReposList(repos.items));
  } else {
    dispatch(setReposListError());
  }

  dispatch(setLoadingReposList(false));
};
