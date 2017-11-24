import * as React from 'react';
import styled from 'styled-components/native';
import { COLORS } from '../../constants/index';

const StyledNotFoundScreen = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const StyledNotFoundText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  color: ${COLORS.primaryColor};
`;

const NotFoundScreen = () => (
  <StyledNotFoundScreen>
    <StyledNotFoundText>Nothing was found :(</StyledNotFoundText>
  </StyledNotFoundScreen>
);

export default NotFoundScreen;
