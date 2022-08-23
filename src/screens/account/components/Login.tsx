import { FC } from 'react';
import { OnChangeTab } from '..';

export const Login: FC = () => {

  return ( 
    <div className="Login">
      Login

      <a onClick={() => OnChangeTab('register')} style={{cursor: 'pointer', textDecoration: 'underline'}}>Register</a>
    </div>
  )
}
