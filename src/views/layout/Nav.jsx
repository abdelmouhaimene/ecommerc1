import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'

import { hamburger } from '../../assets/icons'
import { headerLogo } from '../../assets/images'

import { navLinks } from '../../data'
import { SelectedContext } from './Layout'
const Nav = () => {
    const { selected, setSelected } = useContext(SelectedContext)
    const setLinks = () => (
        navLinks.map((item) => (
            <li key={item.label} >
                {item.isLink
                    ? <Link
                        to={item.href}
                        className={`font-montserrat leading-normal text-lg ${selected === item.href ? 'text-slate-900 font-bold' : 'text-slate-gray'} `}
                    >
                        <p className='hover:text-slate-900'>{item.label}</p>
                    </Link>
                    : <a
                        href={item.href}
                        className='font-montserrat leading-normal text-lg text-slate-gray '
                    >
                        <p className='hover:text-slate-900'>{item.label}</p>
                    </a>
                }
            </li>
        ))
    )
    return (
        <header className='padding-x  fixed z-50 w-full pt-4 bg-white '>
            <nav className=' flex justify-between  max-container shadow-3xl p-6 rounded-md'>
                <Link to="/home">
                    <img
                        src={headerLogo}
                        alt="Logo"
                        width={130}
                        height={29}
                        className='m-0 w-[129px] h-[29px]'
                        onClick={() => setSelected('/home')}
                    />
                </Link>
                <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                    {setLinks()}
                </ul>
                <div className='hidden max-lg:block '>
                    <img
                        src={hamburger}
                        alt='hamburgar'
                        width={25}
                        height={25}
                        className='cursor-pointer'

                    />
                </div>

            </nav>
        </header>
    )
}

export default Nav
