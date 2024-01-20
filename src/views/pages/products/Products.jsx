import { Box, Card, IconButton, Typography, Drawer, List, ListItem, Accordion, AccordionSummary, AccordionDetails, FormControl, FormControlLabel, Checkbox, Radio, RadioGroup } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { products } from '../../../data'
import ProductCard from '../../components/ProductCard'
import { ProductsNav } from '../../components'
const Products = () => {
    const { t } = useTranslation()
    const location = useLocation().pathname;
    const navigate = useNavigate()
    return (
        <main className='relative'>
        <Box className='pt-24 pb-10 sm:px-16 px-8 '   >
            <Box className='flex flex-col w-full h-full  max-container'>
                <ProductsNav filter/>
                <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
                    {products.map((product) => (
                        <ProductCard key={product.name} {...product} />
                    ))}
                    {products.map((product) => (
                        <ProductCard key={product.name} {...product} />
                    ))}
                    {products.map((product) => (
                        <ProductCard key={product.name} {...product} />
                    ))}
                </div>
            </Box>

        </Box>
    </main>
    )
}

export default Products
