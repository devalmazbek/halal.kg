import React from 'react'

import TopBar from '../../../shared/top-bar'
import Menu from '../../../shared/menu'

import logo from '../../../../public/images/header/logo.svg'

export default function Header() {
  return (
    <header className='mt-3'>
      <div className='flex items-center w-full'>
        <div className=''>
          <img src={logo} alt="logo" width={80} />    
        </div>
        <div className='flex-grow ml-3'>
          <TopBar />
          <Menu />
        </div>
      </div>
    </header>
  )
}
