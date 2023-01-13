import Header from './components/Header';
import Post from './components/posts/Post';
import UserInfo from './components/userInfo/UserInfo';
import Options from './components/Options';

import './App.css';
import RelatedAccounts from './components/relatedAccounts/RelatedAccounts';

function App() {
  return (
    <div className='app'>
      <Header />
      <UserInfo />
      <Options />
      <Post />
      <RelatedAccounts />
    </div>
  );
}

export default App;
