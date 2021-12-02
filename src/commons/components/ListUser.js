import React from 'react'
import styles from './ListUser.module.css';

function ListUser(props) {
  const { users } = props;
  if (users.length <= 0) {
    return null;
  }
  return (
    <table className={styles.table}>
      <tr>
        <th> Avatar </th>
        <th> Login </th>
        <th> Type </th>
        <th> Score </th>
      </tr>
      
        {(users || []).map((user, index) => (
          <tr key={index}>
            <td> 
              <img className={styles.avatar} src={user.avatar_url} alt={`${user.login} avatar`} />
            </td>
            <td> {user.login} </td>
            <td>
              <span className={styles.type}> {user.type} </span>
            </td>
            <td> {user.score} </td>
          </tr>
        ))}
    </table>
  )
}

export default ListUser
