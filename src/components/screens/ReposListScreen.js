import * as React from 'react';
import { View, FlatList, TouchableNativeFeedback } from 'react-native';
import PropTypes from 'prop-types';
import { Actions as routerActions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Octicons';
import styled from 'styled-components/native';
import { COLORS } from '../../constants/index';

const StyledReposListItem = styled.View`
  height: 70px;
  padding-horizontal: 5px;
  padding-vertical: 5px;
  background-color: ${COLORS.backgroundColor};
  flex-direction: row;
`;

const StyledAvatar = styled.Image`
  width: 60px;
  height: 60px;
`;

const StyledInfoContainer = styled.View`
  flex: 1;
  padding-horizontal: 3px;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const StyledRepoName = styled.Text`
  flex: 1;
  font-weight: bold;
  font-size: 17px;
`;

const StyledIconsContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
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

const StyledSeparator = styled.View`
  height: 1px;
  background-color: ${COLORS.primaryColor};
`;

const ReposListItem = ({ data }) => (
  <TouchableNativeFeedback
    onPress={() =>
      routerActions.repoDetails({ repoDetails: data, title: data.name })
    }
  >
    <StyledReposListItem>
      <View>
        <StyledAvatar
          source={{ uri: data.owner.avatar_url }}
          resizeMode="contain"
        />
      </View>
      <StyledInfoContainer>
        <StyledRepoName numberOfLines={1} ellipsizeMode="head">
          {data.full_name}
        </StyledRepoName>
        <StyledIconsContainer>
          <StyledIcon>
            <Icon name="star" size={18} color={COLORS.primaryColor} />
            <StyledIconText>{data.stargazers_count}</StyledIconText>
          </StyledIcon>
          <StyledIcon>
            <Icon name="eye" size={18} color={COLORS.primaryColor} />
            <StyledIconText>{data.watchers_count}</StyledIconText>
          </StyledIcon>
          <StyledIcon>
            <Icon name="issue-opened" size={18} color={COLORS.primaryColor} />
            <StyledIconText>{data.open_issues_count}</StyledIconText>
          </StyledIcon>
        </StyledIconsContainer>
      </StyledInfoContainer>
    </StyledReposListItem>
  </TouchableNativeFeedback>
);

ReposListItem.propTypes = {
  data: PropTypes.object.isRequired,
};

const ReposListScreen = ({ repos }) => (
  <FlatList
    data={repos}
    renderItem={({ item }) => <ReposListItem data={item} />}
    keyExtractor={item => item.id}
    ItemSeparatorComponent={() => <StyledSeparator />}
  />
);

ReposListScreen.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default ReposListScreen;
