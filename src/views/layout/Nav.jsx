import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { headerLogo } from '../../assets/images'
import { navLinks } from '../../data'
import { SelectedContext } from './Layout'
import { ButtonIcon } from '../components'
import { Collapse, Box } from '@mui/material'
import { Menu, Close } from '@mui/icons-material'
const Nav = () => {
    const [list, setList] = useState(false);
    const openList = () => {
        list ? setList(false) : setList(true)
    }
    const { selected, setSelected } = useContext(SelectedContext)
    const setLinks = () => (
        navLinks.map((item) => (
            <li key={item.label} >
                {item.isLink
                    ? <Link
                        to={item.href}
                        className={`font-montserrat no-underline leading-normal text-lg ${selected === item.href ? 'text-slate-900 font-bold' : 'text-slate-gray'} `}
                    >
                        <p className='hover:text-slate-900' onClick={() => {setSelected(item.href)}}>{item.label}</p>
                    </Link>
                    : <a
                        href={item.href}
                        className='font-montserrat no-underline leading-normal text-lg text-slate-gray '
                    >
                        <p className='hover:text-slate-900'>{item.label}</p>
                    </a>
                }
            </li>
        ))
    )
    return (
        <header className='padding-s  fixed z-50 w-full pt-4  bg-white '>
            <nav className=' flex justify-between  max-container shadow-3xl md:p-6 p-4 rounded-md'>
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
                <ul className='flex-1 flex list-none justify-center items-center gap-16 max-lg:hidden'>
                    {setLinks()}
                </ul>


                <div className='hidden max-lg:block '>
                    <ButtonIcon icon={list ? <Close /> : <Menu />} action={openList} />
                </div>
            </nav>
            <Collapse in={list}>
                <Box sx={{ display: "block", background: 'white', paddingY: '1rem' }}>
                    <ul className='list-none flex flex-col justify-center items-center gap-4'>
                        {setLinks()}
                    </ul>
                </Box>
            </Collapse>
        </header>
    )
}

export default Nav
