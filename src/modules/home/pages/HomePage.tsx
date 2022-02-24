import axios from 'axios';
import React, { useCallback, useEffect, useMemo } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { setInfoUser } from '../redux/usersReducer';
import clsx from 'clsx';

import styles from '../css/HomePage.module.css';

interface Props {

}

const Timer = React.memo((props: { title: string }) => {
  return <>{Date.now()}</>
});

Timer.displayName = 'Timer';

const HomePage = (props: Props) => {

  const dispatch = useDispatch();

  const usersData = useSelector((store: any) => store?.infoUser || []);
  const users = usersData?.infoUser?.slice(0, 9);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = useCallback(async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
      const users = response.data;

      users.map((user: any) => {
        user.titleDraff = user.title;
      });

      dispatch(setInfoUser(users));
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  const changeTitle = useCallback((index: number, value: string) => {
    const newUsersTitle = users;
    newUsersTitle[index].titleDraff = value;
    dispatch(setInfoUser(newUsersTitle));
    console.log(newUsersTitle);

  }, [users]);

  const confirm = (() => {
    const newUsers = users.map((user: any) => {
      return {
        ...user,
        title: user.titleDraff,
      };
    });

    dispatch(setInfoUser(newUsers));
  });

  const reset = (() => {
    const newUsers = users.map((user: any) => {
      return {
        ...user,
        titleDraff: user.title,
      };
    });

    dispatch(setInfoUser(newUsers));
  });

  return (
    <>

      <a href='/payroll' className={clsx(styles.payrollLink)}>
        PayRoll
      </a>
      <div className={clsx(styles.infoContainer)}>

        <div className={clsx(styles.btnWrap)}>
          <button className={clsx(styles.confirm, styles.btn)} onClick={confirm}>Confirm</button>
          <button className={clsx(styles.reset, styles.btn)} onClick={reset}>Reset</button>
        </div>

        {users?.map((user: any, index: number) => (
          <div key={user.id} className={clsx(styles.info)}>
            <div className={clsx(styles.wrapImg)}>
              <img src={user.thumbnailUrl} alt='img' className={clsx(styles.img)} />
            </div>

            <div className={clsx(styles.userInfo)}>
              <h2 className={clsx(styles.userId)}>{user.id}</h2>
              <label className={clsx(styles.userLabel)} htmlFor={user.id}>
                Title:
              </label>
              <input type='text' id={user.id} className={clsx(styles.userInput)}
                value={user.titleDraff}
                onChange={(e) => changeTitle(index, e.target.value)}
              />

            </div>

            <Timer title={user.title} />

          </div>
        ))}
      </div>
    </>
  );
};

export default HomePage;

