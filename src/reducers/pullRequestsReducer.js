import {
  SET_PR_LIST,
  SET_PR_LIST_ERROR,
  SET_LOADING_PR_LIST,
} from '../actions/pullRequestActions';

const initialState = {
  prList: null,
  isPrListError: false,
  isLoadingPrList: false,
};

const pullRequests = (state = initialState, action) => {
  const { prList, isLoadingPrList, isPrListError } = action;

  switch (action.type) {
    case SET_PR_LIST:
      return {
        ...state,
        prList,
        isPrListError,
      };
    case SET_PR_LIST_ERROR:
      return {
        ...state,
        isPrListError,
      };
    case SET_LOADING_PR_LIST:
      return {
        ...state,
        isLoadingPrList,
      };
    default:
      return state;
  }
};

export default pullRequests;
