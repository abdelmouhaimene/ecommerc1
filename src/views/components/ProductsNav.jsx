import React from 'react'
import { Box, Card, IconButton, Typography, Drawer, Accordion, AccordionSummary, AccordionDetails, FormControl, FormControlLabel, Checkbox, Radio, RadioGroup } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import SmallButtonIcon from './SmallButtonIcon'
import FilterDrawer from './FilterDrawer'
import { categories } from '../../data'
import { FilterAltOutlined, SearchOutlined, FavoriteBorderOutlined, ShoppingCartOutlined, ExpandMore } from '@mui/icons-material'
import { useState } from 'react'
const ProductsNav = ({filter , type}) => {
    const [filtersOpen,setFiltersOpen] = useState(false)
    const toggleDrawer = () => {
       setFiltersOpen(!filtersOpen)
    }
    return (
        <>
            <Card className='my-4 py-4 sm:px-8 px-4 flex sm:justify-between justify-center items-center'>
                <Box className='border hidden sm:flex justify-start border-solid border-coral-red px-2 rounded-full '>
                    <IconButton className='text-coral-red'> <SearchOutlined /> </IconButton>
                    <input type='text' placeholder='Search ' className='input text-sm border-none overflow-hidden  rounded-full' />
                </Box>
                <Box className="flex gap-2">
                    {filter && <SmallButtonIcon label="Filter" iconURL={<FilterAltOutlined />} action={toggleDrawer}/>}
                    <IconButton className='text-coral-red sm:hidden flex'> <SearchOutlined /> </IconButton>
                    <IconButton className='text-coral-red sm:hidden flex' onClick={toggleDrawer}> <FilterAltOutlined /> </IconButton>
                    <IconButton className='text-coral-red' > <ShoppingCartOutlined /> </IconButton>
                    <IconButton className='text-coral-red'> <FavoriteBorderOutlined /> </IconButton>
                </Box>
            </Card>
           {filter && <Drawer 
                open={filtersOpen}
                onClose={toggleDrawer}
            >
                <FilterDrawer type={type}/>
            </Drawer>}
        </>
  )
}

export default ProductsNav