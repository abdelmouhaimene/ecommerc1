import React from 'react'
import { ProductsNav } from '../../components'
import { Box } from '@mui/material'
const Clothes = () => {
  return (
    <main className='relative'>
    <Box className='pt-24 pb-10 sm:px-16 px-8 '   >
        <Box className='flex flex-col w-full h-full  max-container'>
            <ProductsNav filter type={'clothes'}/>
        </Box>

    </Box>
</main>
  )
}

export default Clothes