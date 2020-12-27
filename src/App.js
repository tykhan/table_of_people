import { Route, Switch, Redirect } from 'react-router-dom';

import { PostsList } from './components/PostsList/PostsList';
import { PostDetails } from './components/PostDetails/PostDetails';
import { Users } from './components/UsersList/UsersList';
import './App.scss';

function App() {

  return (
    <>
      <Switch>
        <Route path="/posts/" component={PostsList} exact/>
        <Route path="/posts/:postId" component={PostDetails} exact/>
        <Route path="/" component={Users} exact />

        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
