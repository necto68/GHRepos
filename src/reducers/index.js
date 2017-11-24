import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import repos from './reposReducer';
import pullRequests from './pullRequestsReducer';

const ghReposApp = createStore(
  combineReducers({ repos, pullRequests }),
  applyMiddleware(thunk),
);

export default ghReposApp;
