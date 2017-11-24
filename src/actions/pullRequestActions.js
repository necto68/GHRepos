import { GITHUB_API } from '../utils';

export const SET_PR_LIST = 'SET_PR_LIST';
const setPrList = prList => ({
  type: SET_PR_LIST,
  prList,
  isPrListError: false,
});

export const SET_PR_LIST_ERROR = 'SET_PR_LIST_ERROR';
const setPrListError = () => ({
  type: SET_PR_LIST_ERROR,
  isPrListError: true,
});

export const SET_LOADING_PR_LIST = 'SET_LOADING_PR_LIST';
const setLoadingPrList = isLoadingPrList => ({
  type: SET_LOADING_PR_LIST,
  isLoadingPrList,
});

export const fetchPrList = (reposOwner, reposName) => async dispatch => {
  dispatch(setLoadingPrList(true));

  const pullRequests = await GITHUB_API.getReposPullRequests(
    reposOwner,
    reposName,
  );

  if (Array.isArray(pullRequests)) {
    dispatch(setPrList(pullRequests));
  } else {
    dispatch(setPrListError());
  }

  dispatch(setLoadingPrList(false));
};
