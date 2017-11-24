import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import {
  LoadingScreen,
  ErrorScreen,
  NotFoundScreen,
  PullRequestsScreen,
} from './screens';
import { fetchPrList } from '../actions/pullRequestActions';

const mapStateToProps = ({
  pullRequests: { prList, isPrListError, isLoadingPrList },
}) => ({
  prList,
  isPrListError,
  isLoadingPrList,
});

const mapDispatchToProps = dispatch => ({
  fetchPullRequestsList: (reposOwner, reposName) =>
    dispatch(fetchPrList(reposOwner, reposName)),
});

const StyledPullRequestsList = styled.View`
  flex: 1;
`;

@connect(mapStateToProps, mapDispatchToProps)
class PullRequestsList extends React.Component {
  static propTypes = {
    reposOwner: PropTypes.string.isRequired,
    reposName: PropTypes.string.isRequired,
    fetchPullRequestsList: PropTypes.func.isRequired,
    prList: PropTypes.array.isRequired,
    isPrListError: PropTypes.bool.isRequired,
    isLoadingPrList: PropTypes.bool.isRequired,
  };

  componentWillMount() {
    const { reposOwner, reposName, fetchPullRequestsList } = this.props;

    fetchPullRequestsList(reposOwner, reposName);
  }
  renderPullRequestsList = () => {
    const { prList, isPrListError, isLoadingPrList } = this.props;

    if (isLoadingPrList) {
      return <LoadingScreen />;
    } else if (isPrListError) {
      return <ErrorScreen />;
    } else if (prList && prList.length === 0) {
      return <NotFoundScreen />;
    }

    return <PullRequestsScreen prList={prList} />;
  };

  render() {
    return (
      <StyledPullRequestsList>
        {this.renderPullRequestsList()}
      </StyledPullRequestsList>
    );
  }
}

export default PullRequestsList;
