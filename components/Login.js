// import Image from "next/image";
// import { useContext } from 'react';
// import { stateContext } from '../components/HBOProvider';
import { useStateContext } from '../components/HBOProvider';

const Login = () => {
  const globalState = useStateContext();

  return (
    <div className='login-user'>
      <div className='login-user__top'>
        <div className='login-user__logo' />
        <span className='login-user__title'>Who Is Watching?</span>
      </div>
      <div className='login-user__form'>
        <div className='login-user__user-box'>
          <img
            className='login-user__user-Image'
            src={globalState.defaultImage}
            alt=''
          />
          {/* Why not use a span if its only text like - .login-user__title */}
          <div className='login-user__user-name'>{globalState.user}</div>
        </div>
      </div>
      <div className='login-user__btns'>
        <button className='login-user__btns--adult'>Add Adult</button>
        <button className='login-user__btns--kid'>Add Kid</button>
      </div>
    </div>
  );
};

export default Login;
