import React from 'react'
import { Box, Typography } from '@mui/material'
import { shoe8 } from '../../../assets/images'
import {IconButton} from '@mui/material'
import { ChevronLeft,ChevronRight } from '@mui/icons-material'
const ProductPage = () => {
  return (
    <main className="relative">
        <Box className='pt-24 pb-10 sm:px-16 px-8 flex '   >
            <Box className='flex-1  w-full p-5'   > 
                <Box className='absolute'>
                    <Box className="relative w-full h-full">
                        <img src={shoe8} alt="shoe8" className="w-full h-full object-cover" />
                        <Box className='absolute flex  bottom-4 right-4'>
                            <IconButton> <ChevronLeft/> </IconButton>
                            <IconButton> <ChevronRight/> </IconButton>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box className='flex-1 w-full p-5'>
                productPage2
            </Box>
        </Box>
    </main>
  )
}

export default ProductPage