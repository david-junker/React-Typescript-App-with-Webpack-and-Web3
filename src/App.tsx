import React from 'react';
import FirstPage from './pages/firstPage/FirstPage';
import SecondPage from './pages/secondPage/SecondPage';
import NotFoundPage from './pages/notFoundPage/NotFoundPage';
import { Route, Switch } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/'>
          <FirstPage />
        </Route>
        <Route path='/second-page'>
          <SecondPage />
        </Route>
        <Route path='*'>
          <NotFoundPage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
