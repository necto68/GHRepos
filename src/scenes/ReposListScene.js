import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { SearchInput } from 'react-native-search-input';
import styled from 'styled-components/native';
import {
  LoadingScreen,
  ReposListSearchScreen,
  ReposListScreen,
  NotFoundScreen,
  ErrorScreen,
} from '../components/screens';
import { fetchReposList } from '../actions/reposActions';

const mapStateToProps = ({
  repos: { reposList, isReposListError, isLoadingReposList },
}) => ({
  reposList,
  isReposListError,
  isLoadingReposList,
});

const mapDispatchToProps = dispatch => ({
  searchReposList: searchString => dispatch(fetchReposList(searchString)),
});

const StyledReposListScene = styled.View`
  flex: 1;
`;

@connect(mapStateToProps, mapDispatchToProps)
class ReposListScene extends React.Component {
  static propTypes = {
    searchReposList: PropTypes.func.isRequired,
    reposList: PropTypes.array.isRequired,
    isReposListError: PropTypes.bool.isRequired,
    isLoadingReposList: PropTypes.bool.isRequired,
  };

  onSearch = searchString => {
    const { searchReposList } = this.props;

    searchReposList(searchString);
  };

  renderReposList = () => {
    const { reposList, isReposListError, isLoadingReposList } = this.props;

    if (isLoadingReposList) {
      return <LoadingScreen />;
    } else if (isReposListError) {
      return <ErrorScreen />;
    } else if (reposList === null) {
      return <ReposListSearchScreen />;
    } else if (reposList && reposList.length === 0) {
      return <NotFoundScreen />;
    }

    return <ReposListScreen repos={reposList} />;
  };

  render() {
    return (
      <StyledReposListScene>
        <SearchInput
          autoCapitalize="none"
          onSearch={this.onSearch}
          selectTextOnFocus
        />
        {this.renderReposList()}
      </StyledReposListScene>
    );
  }
}

export default ReposListScene;
