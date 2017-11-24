import * as React from 'react';
import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';
import { COLORS } from '../../constants/index';

const StyledLoadingScreen = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const LoadingScreen = () => (
  <StyledLoadingScreen>
    <ActivityIndicator size="large" color={COLORS.primaryColor} />
  </StyledLoadingScreen>
);

export default LoadingScreen;
