import React from 'react';
import { useSelector } from 'react-redux';

import { CreateRoom } from './pages/CreateRoom';
import { GamePage } from './pages/GamePage';
import { HubPage } from './pages/HubPage';
import { selectStarted } from './store/ducks/rooms/selectors';
import { selectJoined } from './store/ducks/user/selectors';

function App() {
  const joined = useSelector(selectJoined);
  const started = useSelector(selectStarted);

  if (started) {
    return (
      <div className="app__container">
        <GamePage />
      </div>
    );
  }

  return (
    <div className="app__container">
      {!joined ? <HubPage /> : <CreateRoom />}
    </div>
  );
}

export default App;
