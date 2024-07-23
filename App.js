import React, { useState } from 'react';

import Profile from './Profile';
import Chat from './Chat';
import Home from './Home';
import Chats from './Chats';

const App = () => {
  const [screen, setScreen] = useState('Home');

  if (screen === 'Home') {
    return <Home setScreen={setScreen} />;
  } else if (screen === 'Chat') {
    return <Chat setScreen={setScreen} />;
  } else if (screen === 'Chats') {
    return <Chats setScreen={setScreen} />;
  } else {
    return <Profile setScreen={setScreen} />;
  }
}

export default App;
