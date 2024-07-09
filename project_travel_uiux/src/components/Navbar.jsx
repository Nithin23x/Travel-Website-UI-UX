import React from 'react'
import {NAV_LINKS} from '../constants'
import { Link } from 'react-router-dom'
import Button from './Button'


const Navbar = () => {
  return (
    <nav className='
    max-container padding-container flexBetween relative z-30 py-5'>
      
     <a href='/'> <img src='/public/hilink-logo.svg' alt='logo' height={50} width={80}/></a>

     <ul className='hidden h-full gap-12 lg:flex '>
        {
          NAV_LINKS.map(link => (
            <a href={link.href} key={link.key} className='regular-16 text-gray-50 cursor-pointer
            pb-1.5  hover:font-bold '>
                {link.label}
            </a>
          ))
        }
     </ul>

     <div className='hidden lg:flexCenter'>
        <Button type='button' title='Log In'
        icon='/public/user.svg' variant='btn_dark_green' />
     </div>

     <img 
        className='inline-flex cursor-pointer lg:hidden'
        src='/public/menu.svg'
        alt='ment'
        width={33}
        height={33}
     />

    </nav>
  )
}

export default Navbar