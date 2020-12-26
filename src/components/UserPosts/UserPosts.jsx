import React from 'react';

import './UserPosts.scss';

export const Post = ({ post }) => {

  return (
    <li>
      {post.title}
    </li>
  )
}
