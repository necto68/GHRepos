import * as React from 'react';
import styled from 'styled-components/native';
import { COLORS } from '../../constants/index';

const StyledErrorScreen = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const StyledErrorText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  color: ${COLORS.primaryColor};
`;

const ErrorScreen = () => (
  <StyledErrorScreen>
    <StyledErrorText>Something went wrong :(</StyledErrorText>
  </StyledErrorScreen>
);

export default ErrorScreen;
