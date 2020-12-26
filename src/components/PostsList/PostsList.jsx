import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Route } from 'react-router-dom';

import { loadPostsThunk } from '../../redux/actions/postsActions';
import { selectors } from '../../redux/reducers/rootReducer';
import { Loader } from '../Loader/Loader';
import { UserPosts } from '../UserPosts/UserPosts';

export const PostsList = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectors.getUsers);
  const loading = useSelector(selectors.getLoading);

  useEffect(() => {
    dispatch(loadPostsThunk())
  }, [dispatch])


// console.log(posts);
  return (
    <section className="posts">
      <Link to="/">Go back</Link>
      {loading ? (
        <Loader />
      ) : (
        <>
          {users.map(user =>
            <UserPosts userId={user.id} />
          )}
        </>
      )}
    </section>
  )
}