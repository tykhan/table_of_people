import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import { loadPostsThunk } from '../../redux/actions/postsActions';
import { loadUsersThunk } from '../../redux/actions/usersActions';
import { selectors } from '../../redux/reducers/rootReducer';
import { Loader } from '../Loader/Loader';
import { UserPost } from '../UserPosts/UserPost';
import './PostsList.scss';

export const PostsList = ({ match }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const users = useSelector(selectors.getUsers);
  const posts = useSelector(selectors.getPosts)
  const loading = useSelector(selectors.getLoading);
  const [selectedUser, setSelectedUser] = useState('0');

  useEffect(() => {
    dispatch(loadPostsThunk('0'));
    dispatch(loadUsersThunk());
  }, [dispatch]);

  useEffect(() => {
    dispatch(loadPostsThunk(selectedUser))
  }, [selectedUser, dispatch]);

  return (
    <section className="posts">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="posts__top">
            <Link to="/" className="posts__back-btn">Go back</Link>
            <label className="posts__user-selector-label">
                Select a user: &nbsp;
              <select
                className="posts__user-selector"
                value={selectedUser}
                onChange={(e) => {
                  setSelectedUser(e.target.value);
                }}
              >
                <option value={0}>All users</option>
                {users.map(user =>
                  <option key={user.id} value={user.id}>{user.name}</option>
                )}
              </select>
            </label>
          </div>
          <ul className="posts__list">
            {posts.map(post =>
              <UserPost post={post} key={post.id}/>
            )}
          </ul>
        </>
      )}
    </section>
  )
}