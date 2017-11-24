import * as React from 'react';
import { Animated } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Entypo';
import { COLORS } from '../../constants/index';

const StyledReposListSearchScreen = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
`;

const StyledAnimatedView = styled.View`
  flex: 1;
`;

const StyledTextView = styled.View`
  flex: 2;
`;

const StyledText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  color: ${COLORS.primaryColor};
`;

class ReposListSearchScreen extends React.Component {
  state = {
    topPaddingAnim: new Animated.Value(40),
  };

  componentDidMount() {
    this.runAnimation();
  }

  runAnimation = () => {
    // get _value
    const animationValue = this.state.topPaddingAnim._value === 40 ? 5 : 40; // eslint-disable-line

    Animated.timing(this.state.topPaddingAnim, {
      toValue: animationValue,
      duration: 800,
    }).start(() => this.runAnimation());
  };

  render() {
    const { topPaddingAnim } = this.state;

    return (
      <StyledReposListSearchScreen>
        <StyledAnimatedView>
          <Animated.View style={{ paddingTop: topPaddingAnim }}>
            <Icon name="arrow-long-up" size={50} />
          </Animated.View>
        </StyledAnimatedView>
        <StyledTextView>
          <StyledText>
            Search repositories (i.e. babel, webpack, react...)
          </StyledText>
        </StyledTextView>
      </StyledReposListSearchScreen>
    );
  }
}

export default ReposListSearchScreen;
