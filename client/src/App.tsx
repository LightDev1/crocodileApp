import React from 'react';
import { useSelector } from 'react-redux';

import { CreateRoom } from './pages/CreateRoom';
import { HubPage } from './pages/HubPage';
import { selectJoined } from './store/ducks/user/selectors';

function App() {
  const joined = useSelector(selectJoined);
  return (
    <div className="app__container">
      {!joined ? <HubPage /> : <CreateRoom />}
    </div>
  );
}

export default App;
