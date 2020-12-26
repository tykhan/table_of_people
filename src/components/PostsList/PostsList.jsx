import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { loadPostsThunk } from '../../redux/actions/postsActions';
import { loadUsersThunk } from '../../redux/actions/usersActions';
import { selectors } from '../../redux/reducers/rootReducer';
import { Loader } from '../Loader/Loader';
import { Post } from '../UserPosts/UserPosts';

export const PostsList = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectors.getUsers);
  const posts = useSelector(selectors.getPosts)
  const loading = useSelector(selectors.getLoading);
  const [selectedUser, setSelectedUser] = useState('0');

  useEffect(() => {
    dispatch(loadPostsThunk());
    dispatch(loadUsersThunk());
  }, [dispatch]);

  const filteredPosts = posts.filter(post => {
    if (selectedUser === '0') {
      return post;
    } else {
      return post.userId.toString() === selectedUser;
    }
  });

  return (
    <section className="posts">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Link to="/">Go back</Link>
          <label>
            Select a user: &nbsp;
            <select
              className="user-selector"
              value={selectedUser}
              onChange={(e) => {
                setSelectedUser(e.target.value)
              }}
            >
              <option value={0}>All users</option>
              {users.map(user =>
                <option key={user.id} value={user.id}>{user.name}</option>
              )}
            </select>
          </label>
          <ul>
            {filteredPosts.map(post =>
              <Post post={post} key={post.id}/>
            )}
          </ul>
        </>
      )}
    </section>
  )
}