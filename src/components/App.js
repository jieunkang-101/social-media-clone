import React from 'react';
import Navbar from './Navbar';
import Profile from './Profile';
import FriendList from './FriendList';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Profile />
      <FriendList />
    </React.Fragment>
  );
}

export default App;
