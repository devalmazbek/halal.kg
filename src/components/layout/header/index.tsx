import React from 'react'

import TopBar from '../../../shared/top-bar'
import { Menu } from '../../../entity/menu/ui/Menu'

import logo from '../../../../public/images/header/logo.svg'
import {menu as menuItems} from '../../../entity/menu/model/store';

export default function Header() {
  return (
    <header className='mt-3'>
      <div className='flex items-center w-full'>
        <div className=''>
          <img src={logo} alt="logo" width={80} />    
        </div>
        <div className='flex-grow ml-3'>
          <TopBar />
          <Menu items={menuItems} />
        </div>
      </div>
    </header>
  )
}
