import { Box, Card, IconButton, Typography, Drawer, List, ListItem, Accordion, AccordionSummary, AccordionDetails, FormControl, FormControlLabel, Checkbox, Radio, RadioGroup } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Button, CategoryCard, SmallButtonIcon,ProductsNav } from '../../components'
import { categories } from '../../../data'
// import ProductsNav from '../../components/ProductsNav'
const Categories = () => {
    const { t } = useTranslation()
    const location = useLocation().pathname;
    const navigate = useNavigate()
    return (
        <main className='relative'>
            <Box className='pt-24 pb-10 sm:px-16 px-8 '   >
                <Box className='flex flex-col w-full h-full  max-container'>
                    <ProductsNav filter/>
                    <Box className='pt-5 h-full grid md:grid-cols-2 grid-cols-1  grid-rows-auto gap-x-10 gap-y-10'>
                        {
                            categories.map((category) => (
                                < CategoryCard key={category.id} {...category} />
                            ))

                        }
                    </Box>
                </Box>

            </Box>
        </main>
    )
}

export default Categories
