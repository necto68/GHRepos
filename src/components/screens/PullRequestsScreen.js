import * as React from 'react';
import {
  View,
  FlatList,
  TouchableNativeFeedback,
  Text,
  Linking,
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import styled from 'styled-components/native';
import { COLORS } from '../../constants/index';

const StyledPrListItem = styled.View`
  height: 70px;
  padding-horizontal: 5px;
  padding-vertical: 5px;
  background-color: ${COLORS.backgroundColor};
  flex-direction: column;
  justify-content: space-between;
`;

const StyledInfoContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StyledAuthorContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const StyledAuthorText = styled.Text`
  margin-horizontal: 5px;
`;

const StyledSeparator = styled.View`
  height: 1px;
  background-color: ${COLORS.primaryColor};
`;

const PrListItem = ({ data }) => (
  <TouchableNativeFeedback
    onPress={() => {
      Linking.openURL(data.html_url);
    }}
  >
    <StyledPrListItem>
      <Text>{`#${data.number} ${data.title}`}</Text>
      <StyledInfoContainer>
        <StyledAuthorContainer>
          <Icon name="user" color={COLORS.primaryColor} size={17} />
          <StyledAuthorText>{data.user.login}</StyledAuthorText>
        </StyledAuthorContainer>
        <View>
          <Text>{`Status: ${data.state}`}</Text>
        </View>
      </StyledInfoContainer>
    </StyledPrListItem>
  </TouchableNativeFeedback>
);

PrListItem.propTypes = {
  data: PropTypes.object.isRequired,
};

const ReposListScreen = ({ prList }) => (
  <FlatList
    data={prList}
    renderItem={({ item }) => <PrListItem data={item} />}
    keyExtractor={item => item.id}
    ItemSeparatorComponent={() => <StyledSeparator />}
  />
);

ReposListScreen.propTypes = {
  prList: PropTypes.array.isRequired,
};

export default ReposListScreen;
