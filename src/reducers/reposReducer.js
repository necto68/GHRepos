import {
  SET_REPOS_LIST,
  SET_REPOS_LIST_ERROR,
  SET_LOADING_REPOS_LIST,
} from '../actions/reposActions';

const initialState = {
  reposList: null,
  isReposListError: false,
  isLoadingReposList: false,
};

const repos = (state = initialState, action) => {
  const { reposList, isLoadingReposList, isReposListError } = action;

  switch (action.type) {
    case SET_REPOS_LIST:
      return {
        ...state,
        reposList,
        isReposListError,
      };
    case SET_REPOS_LIST_ERROR:
      return {
        ...state,
        isReposListError,
      };
    case SET_LOADING_REPOS_LIST:
      return {
        ...state,
        isLoadingReposList,
      };
    default:
      return state;
  }
};

export default repos;
