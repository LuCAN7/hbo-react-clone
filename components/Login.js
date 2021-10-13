// import Image from "next/image";
// import { useRouter, useEffect } from 'next/dist/client/router';
import ls from 'local-storage';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';
import { useStateContext } from '../components/HBOProvider';
import { useMounted } from './Hooks/useMounted';

const Login = () => {
  const globalState = useStateContext();
  const [loadingUsers, setLoadingUsers] = useState(false);
  const router = useRouter();
  let hasMounted = useMounted();

  let users = ls('users') !== null ? ls('users') : [];
  // useEffect(() => {
  //   if (users < 1) {
  //     setLoadingUsers(false);
  //   }
  //   // return () => {
  //   //   cleanup
  //   // }
  // }, []);

  const selectUser = (id) => {
    ls('activeUID', id);
    router.push('/');
  };

  const showUsers = () => {
    if (!loadingUsers) {
      return users.map((user) => {
        return (
          <div
            onClick={()=> selectUser(user.id)}
            className='login-user__user-box'
            key={user.id}
          >
            <img
              className='login-user__user-Image'
              src={globalState.defaultImage}
              nalt=''
            />
            {/* Why not use a span if its only text like - .login-user__title */}
            <div className='login-user__user-name'>{user.user}</div>
          </div>
        );
      });
    }
  };

  const createUser = () => {
    router.push('/create');
  };

  return (
    <div className='login-user'>
      <div className='login-user__top'>
        <div className='login-user__logo' />
        <span className='login-user__title'>Who Is Watching?</span>
      </div>
      <div className='login-user__form'>{hasMounted ? showUsers() : ''}</div>
      <div className='login-user__btns'>
        <button className='login-user__btns--adult' onClick={createUser}>
          Create User
        </button>
      </div>
    </div>
  );
};

export default Login;
