// import Image from "next/image";
import { useStateContext } from '../components/HBOProvider';
import ls from 'local-storage';
import {v4} from 'uuid';

export default function CreateUser() {
  const globalState = useStateContext();
  console.log(globalState.user);

  const saveUser = ()=> {
    let users = [],
    return users;
  }
  
  
  return (
    <div className='conatiner'>
      <div className='create-user'>
        <div className='create-user__top'>
          <div className='create-user__logo' />
          <span className='create-user__title'>Who Is Watching?</span>
        </div>

        <div className='create-user__form'>
          <img
            className='create-user__user-img'
            src={globalState.defaultImage}
            alt='user profile image'
          />
          {/* Why not use a span if its only text like - .create-user__title */}
          <div className='create-user__input-group'>
            <label>Name</label>
            <input
              type='text'
              className='create-user__inputText'
              value={globalState.user}
              onChange={globalState.handleCreateUser}
            />
            <div className='create-user__colors'>
              <div
                className='create-user__color create-user__color--active'
                style={{
                  background: 'rgb(2,27,64)',
                  background:
                    'linear-gradient(135deg,rgba(2,27,64,1) 11%, rgba(119,30,135,1) 100%)',
                }}
              >
                a
              </div>
              <div
                className='create-user__color create-user__color'
                style={{
                  background: 'rgb(2,27,64)',
                  background:
                    'linear-gradient(135deg,rgba(2,27,164,1) 11%, rgba(119,30,135,1) 100%)',
                }}
              >
                b
              </div>
              <div
                className='create-user__color create-user__color'
                style={{
                  background: 'rgb(2,27,64)',
                  background:
                    'linear-gradient(135deg,rgba(2,127,64,1) 11%, rgba(119,30,135,1) 100%)',
                }}
              >
                c
              </div>
              <div
                className='create-user__color create-user__color'
                style={{
                  background: 'rgb(2,27,64)',
                  background:
                    'linear-gradient(135deg,rgba(2,127,64,1) 11%, rgba(119,30,135,1) 100%)',
                }}
              >
                c
              </div>
            </div>
          </div>
        </div>
        <div className='create-user__btns'>
          <button className='create-user__btns--save'>Save</button>
          <button className='create-user__btns--cancel'>Cancel</button>
        </div>
      </div>
    </div>
  );
}
