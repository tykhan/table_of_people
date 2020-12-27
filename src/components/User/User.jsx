import React from 'react';

import './User.scss';
export const User = ({ user }) => {

  return (
    <>
      <tr className="users__table__row">
        <td className="users__table_row-element">{user.name}</td>
        <td className="users__table_row-element">{user.username}</td>
        <td className="users__table_row-element">{user.email}</td>
      </tr>
    </>
  )
}