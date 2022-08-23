import { FC } from 'react';
import { OnChangeTab } from '..';

export const Register: FC = () => {

  return ( 
    <div className="Register">
      Register

      <a onClick={() => OnChangeTab('login')} style={{cursor: 'pointer', textDecoration: 'underline'}}>Login</a>
    </div>
  )
}
