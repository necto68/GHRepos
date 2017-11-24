import * as React from 'react';
import {
  Router,
  Stack,
  Scene,
  Actions as routerActions,
} from 'react-native-router-flux';
import { Provider } from 'react-redux';
import { ReposListScene, RepoDetailsScene } from './scenes';
import ghReposApp from './reducers';

const App = () => (
  <Provider store={ghReposApp}>
    <Router backAndroidHandler={routerActions.pop}>
      <Stack key="root">
        <Scene
          key="reposList"
          title="Search repositories..."
          component={ReposListScene}
        />
        <Scene key="repoDetails" component={RepoDetailsScene} />
      </Stack>
    </Router>
  </Provider>
);

export default App;
