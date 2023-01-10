import Header from './components/Header';
import Post from './components/Post';
import UserInfo from './components/UserInfo';

import stylingClass from './App.css';

function App() {
  return (
    <div className={stylingClass.app}>
      <Header />
      <UserInfo />
      <Post />
    </div>
  );
}

export default App;
