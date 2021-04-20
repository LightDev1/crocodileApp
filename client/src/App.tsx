import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { CreateRoom } from './pages/CreateRoom';
import { GamePage } from './pages/GamePage';

import { HubPage } from './pages/HubPage';

function App() {
  return (
    <div className="app__container">
      <Switch>
        <Route path="/" exact>
          <HubPage />
        </Route>
        <Route path="/create">
          <CreateRoom />
        </Route>
        <Route path="/game">
          <GamePage />
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
