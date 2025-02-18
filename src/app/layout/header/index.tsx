import React from 'react'
import { Divider } from 'antd';

import TopBar from '../../../shared/ui/top-bar'
import { Menu } from '../../../entity/menu/ui/Menu'
import Button from '../../../shared/ui/button'

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
          <Divider className='p-0 my-1' />
          <div className='flex justify-between items-center'>
            <Menu items={menuItems} />
            <Button className='mt-2' text='Халал сертификатын алу' />
          </div>
        </div>
      </div>
    </header>
  )
}
