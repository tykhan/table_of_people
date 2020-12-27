const BASE_URL = 'https://jsonplaceholder.typicode.com';

const request = (endpoint, options) => {
  return fetch(`${BASE_URL}${endpoint}`, options)
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`);
      }

      return response.json();
    });
}

const postMethod = (url, data) => {
  return request(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(data)
  });
}

const deleteMethod = (url) => {
  return request(url, { method: 'DELETE' });
}

const putMethod = (url, data) => {
  return request(url, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(data)
  });
}

export const getUsers = () => request('/users');
export const getUserPosts = (userId) => request(`/posts?userId=${userId}`);
export const getPosts = () => request('/posts');
export const getPostDetails = (postId) => request(`/posts/${postId}`);
export const getPostComments = (postId) => request(`/comments?postId=${postId}`);
export const editPost = (postId, data) => putMethod(`/posts/${postId}`, data);
export const addNewPost = (data) => postMethod('/posts', data);
export const deletePost = (postId) => deleteMethod(`/posts/${postId}`);
