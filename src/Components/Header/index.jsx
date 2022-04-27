import React from 'react';
import logo from '../../Assets/Logos/delta-logo.png';
import { FaSistrix } from 'react-icons/fa';

import { Navbar, NavMenu, Bars, NavMobile } from './styles';

export default function Header() {
  function handleMobile() {
    document.querySelector('.toggle').classList.toggle('open');
    console.log(document.querySelector('.toggle'));
  }

  return (
    <Navbar>
      <NavMenu>
        <img src={logo} alt='logo-delta' />
        <a>Primeiro Menu</a>
        <a>Segundo Menu</a>
        <a>Terceiro Menu</a>
        <a>Quarto Menu</a>
        <Bars onClick={handleMobile} />
      </NavMenu>
      <FaSistrix size={24} className='search' />

      <NavMobile className='toggle'>
        <a>Primeiro Menu</a>
        <a>Segundo Menu</a>
        <a>Terceiro Menu</a>
        <a>Quarto Menu</a>
      </NavMobile>
    </Navbar>
  );
}
