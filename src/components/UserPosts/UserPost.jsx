import React from 'react';
import { Link } from 'react-router-dom';

import './UserPosts.scss';

export const UserPost = ({ post, users }) => {
  const author = users.find(user => user.id === post.userId);

  return (
    <>
      <li className="posts__list_item post-list">
        <div className="post-list__item">
          <div className="post-list__title">{post.title}</div>
          {author && <div className="post-list__author">Author: {author.name}</div>}
        </div>
        <Link to={`/posts/${post.id}`} className="post-list__details-btn">Details</Link>
      </li>
    </>
  )
}
