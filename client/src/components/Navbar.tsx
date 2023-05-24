import * as React from 'react';
import { Link } from 'react-router-dom'

import '../style/Navbar.css'

import logo from '../assets/penguin.png'

export interface IAppProps {
}

export function Navbar (props: IAppProps) {
  return (
    <div className='navbar-container'>
      <div className='logo-container'>
        <p>STOCK APP</p>
      </div>
    </div>
  );
}
