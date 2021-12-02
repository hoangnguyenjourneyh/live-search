import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser, selectFetchStatus, selectUserData } from './searchPageSlice';
import { throttleFunc } from '../../commons/utils/throttle';
import SearchForm from '../../commons/forms/SearchForm';
import ListUser from '../../commons/components/ListUser';
import styles from './SearchPage.module.css';

export function SearchPage() {
  const users = useSelector(selectUserData);
  const status = useSelector(selectFetchStatus);
  const dispatch = useDispatch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getUsersInfo = useCallback(
    throttleFunc((value) => dispatch(fetchUser(value)), 6000),
    []
  );

  const handleSubmit = value => {
    getUsersInfo(value);
  };

  const handleChange = e => {
    const value = e.target.value;
    if (value.length <= 0) {
      getUsersInfo(value, 'cancel');
      dispatch(fetchUser(value));
    } else if (value.length >= 3 || users.length > 0) {
      getUsersInfo(value);
    }
  }

  return (
    <div>
      {status === 'loading' && <div className={styles.loading}> Loading... </div>}
      <h1> User List </h1>
      <SearchForm onChange={handleChange} onSubmit={handleSubmit} />
      {status === 'error' && 
        <div className={styles.error}>
          Some thing went wrong... Wait 10s before perform search again
        </div>
      }
      <ListUser users={users} />
    </div>
  );
}
