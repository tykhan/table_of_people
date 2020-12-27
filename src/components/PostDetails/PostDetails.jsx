import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { loadPostCommentsThunk, loadPostThunk } from '../../redux/actions/postDetailsaction';
import { selectors } from '../../redux/reducers/rootReducer';
import { Loader } from '../Loader/Loader';
import * as api from '../../api/api';
import './PostDetails.scss';
import { loadUsersThunk } from '../../redux/actions/usersActions';

export const PostDetails = ({ match }) => {
  const dispatch = useDispatch();
  const comments = useSelector(selectors.getPostComments);
  const post = useSelector(selectors.getPostDetails);
  const isLoading = useSelector(selectors.getLoading);
  const users = useSelector(selectors.getUsers);
  const [newTitle, setNewTitle] = useState('');
  const [newText, setNewText] = useState('');

  const postId = +match.params.postId;
  const postAuthor = users.find(user => +user.id === +post.userId);

  useEffect(() => {
    dispatch(loadPostCommentsThunk(postId));
    dispatch(loadPostThunk(postId));
    dispatch(loadUsersThunk());
  }, [dispatch, postId]);

  const deleteHandler = (id) => {
    const postToDelete = api.deletePost(id)
      .then(post => console.log(post));
    console.log(postToDelete);
  }

  const saveChangesHandler = (e) => {
    e.preventDefault();
    if (!newTitle || !newText) {
      window.alert('Enter new title and post text before submitting')
      return;
    }
    const newPostValues = {
      title: newTitle,
      body: newText,
      userId: post.userId
    }

    api.editPost(postId, newPostValues).then(post => console.log(post));
  }

  return (
    <section className="details-section">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Link to="/posts" className="details-section__back-btn">Go back</Link>
          <div className="details-section__post post">
            <div className="post__title">{post.title}</div>
            <div className="post__body">{post.body}</div>
            {postAuthor && <div className="post__author">Author: {postAuthor.name}</div>}
            <ul className="post__comments-list">
              <span className="post__comments">Comments: </span>
              {comments.map(comment => {
                return (
                  <li key={comment.id} className="post__comments__comment comment">
                    <div className="comment__name">{comment.name}</div>
                    <div className="comment__body">{comment.body}</div>
                  </li>)
              })}
            </ul>
            <div className="post__bottom">
              <form
                action="post"
                className="post__edit-form"
                onSubmit={saveChangesHandler}
              >
                <div className="post-edit">Editing</div>
                <input
                  value={newTitle}
                  type="text"
                  className="post__edit__title"
                  onChange={(e) => setNewTitle(e.target.value.trimLeft())}
                />
                <input
                  value={newText}
                  type="text"
                  className="post__edit__body"
                  onChange={(e) => setNewText(e.target.value.trimLeft())}
                />
                <button
                  type="submit"
                  className="post__save-btn"
                >
                  Save
                </button>
              </form>
              <Link to="/posts">
                <button
                  className="post__delete-btn"
                  onClick={() => deleteHandler(postId)}
                >
                  Delete post
                </button>
              </Link>
            </div>
          </div>
        </>
      )}
      </section>
  )
}