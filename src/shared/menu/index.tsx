import React from 'react'
import { Link } from 'react-router'

import { menu } from './constants'

export default function Menu() {
  return (
    <ul className='flex mt-2'>
      {menu.map((item) => {
        return(
          <li key={item.id} className='uppercase font-medium mr-4 hover:text-lime-500 last:mr-0 transition-all'>
            <Link to={item.link} className=''>{item.text}</Link>
          </li>
        )
      })}
    </ul>
  )
}
