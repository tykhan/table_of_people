import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './UserPosts.scss';
import { selectors } from '../../redux/reducers/rootReducer';

import './UserPosts.scss';
export const UserPosts = ({ userId }) => {
  const posts = useSelector(selectors.getPosts)
  
  const userPosts = posts.filter(post => post.userId === userId)
  return (
    <>
      <div className="block">
        {userPosts.map(post => {
          return <div>{post.title}</div>
        })}
      </div>
    </>
  )
}
