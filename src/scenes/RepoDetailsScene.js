import * as React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Octicons';
import styled from 'styled-components/native';
import PullRequestsList from '../components/PullRequestsList';
import { COLORS } from '../constants';

const StyledRepoDetailsScene = styled.View`
  flex: 1;
`;

const StyledAvatarInfoContainer = styled.View`
  flex: 1;
  flex-direction: row;
`;

const StyledAvatarContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const StyledInfoContainer = styled.View`
  flex: 1;
  justify-content: space-around;
`;

const StyledAvatar = styled.Image`
  width: 130px;
  height: 130px;
`;

const StyledIcon = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const StyledIconText = styled.Text`
  margin-horizontal: 5px;
  font-size: 15px;
`;

const StyledPullsContainer = styled.View`
  flex: 2;
`;

const StyledPullsText = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  margin-vertical: 5px;
`;

const RepoDetailsScene = ({ repoDetails }) => (
  <StyledRepoDetailsScene>
    <StyledAvatarInfoContainer>
      <StyledAvatarContainer>
        <StyledAvatar source={{ uri: repoDetails.owner.avatar_url }} />
      </StyledAvatarContainer>
      <StyledInfoContainer>
        <StyledIcon>
          <Icon name="star" size={18} color={COLORS.primaryColor} />
          <StyledIconText>{repoDetails.stargazers_count}</StyledIconText>
        </StyledIcon>
        <StyledIcon>
          <Icon name="eye" size={18} color={COLORS.primaryColor} />
          <StyledIconText>{repoDetails.watchers_count}</StyledIconText>
        </StyledIcon>
        <StyledIcon>
          <Icon name="issue-opened" size={18} color={COLORS.primaryColor} />
          <StyledIconText>{repoDetails.open_issues_count}</StyledIconText>
        </StyledIcon>
      </StyledInfoContainer>
    </StyledAvatarInfoContainer>
    <StyledPullsContainer>
      <StyledPullsText>Last 10 pull requests</StyledPullsText>
      <PullRequestsList
        reposOwner={repoDetails.owner.login}
        reposName={repoDetails.name}
      />
    </StyledPullsContainer>
  </StyledRepoDetailsScene>
);

RepoDetailsScene.propTypes = {
  repoDetails: PropTypes.object.isRequired,
};

export default RepoDetailsScene;
