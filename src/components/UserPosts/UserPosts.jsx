import React from 'react';
import { Link } from 'react-router-dom';

import './UserPosts.scss';

export const Post = ({ post }) => {

  return (
    <>
      <li className="posts__list_item post-list">
        <div className="post-list__title">{post.title}</div>
        <Link to={`/posts/${post.id}`} className="post-list__details-btn">Details</Link>
      </li>
    </>
  )
}
