import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { loadUsersThunk } from '../../redux/actions/usersActions';
import { selectors } from '../../redux/reducers/rootReducer';
import { Loader } from '../Loader/Loader';
import { User } from '../User/User';

export const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectors.getUsers);
  const loading = useSelector(selectors.getLoading);

  useEffect(() => {
    dispatch(loadUsersThunk());
  }, [dispatch])

  return (
    <section className="users-page">
      {loading ? (
        <Loader />
      ) : (
        <>
          <table className="users__table">
            <thead className="users__table_head">
              <tr className="users__table_head-row users__table__row">
                <th className="users__table_head-element users__table_head-element_left-radius">Name</th>
                <th className="users__table_head-element">Nickname</th>
                <th className="users__table_head-element users__table_head-element_right-radius">Email</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => {
                return <User user={user} key={user.id} />
              })}
            </tbody>
          </table>
          <Link to="/posts" className='users-page__posts-btn'>Posts</Link>
        </>
      )}
    </section>
  )
}
