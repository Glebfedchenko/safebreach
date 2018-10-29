import React, { Fragment } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import CharList from './Characters/CharList';
import CharInfo from './Characters/CharInfo';
import { store } from '../redux/store';
import { theme } from '../ui/theme';
import { GlobalStyle } from '../ui/globalStyles';

export const Routes = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router>
        <Fragment>
          <GlobalStyle />
          <Switch>
            <Route exact path="/" component={CharList} />
            <Route exact path="/:id" component={CharInfo} />
          </Switch>
        </Fragment>
      </Router>
    </ThemeProvider>
  </Provider>
);
