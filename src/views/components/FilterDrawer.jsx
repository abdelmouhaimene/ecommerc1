import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Box,  Typography, Accordion, AccordionSummary, AccordionDetails, FormControl, FormControlLabel, Checkbox, Radio, RadioGroup } from '@mui/material'
import { ExpandMore } from '@mui/icons-material'
import { useTranslation } from 'react-i18next'
import { extractProductsLink,handleChangeRadioNavigate } from '../../utility/Utils'
const FilterDrawer = ({type}) => {
    const { t } = useTranslation()
    const location = useLocation().pathname;
    const navigate = useNavigate()
    const [category,setCategory] = useState(extractProductsLink(location))
    const [price,setPrice] = useState(0)
  return (
    <Box sx={{width:'240px'}}>
                    <Box sx={{padding:'1rem' }}>
                        <Typography textAlign='center' marginBottom='1rem'>
                            Filters
                        </Typography>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMore/>}>
                            Category
                            </AccordionSummary>
                            <AccordionDetails>
                                <FormControl>
                                    <RadioGroup
                                        // aria-labelledby="demo-radio-buttons-group-label"
                                        value={category}
                                        onChange={(event) => handleChangeRadio(setCategory,event)}
                                        name="radio-buttons-categoty"
                                    >
                                        <FormControlLabel value='Clothes' control={<Radio />} label='Clothes' />
                                        <FormControlLabel value='Cosmitics' control={<Radio />} label='Cosmitics' />
                                        <FormControlLabel value='Accessoirs' control={<Radio />} label='Accessoirs' />
                                        <FormControlLabel value='Electronics' control={<Radio />} label='Electronics' />
                                    </RadioGroup>
                                </FormControl>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMore/>}>
                            Price
                            </AccordionSummary>
                            <AccordionDetails>
                                <FormControl >
                                    <FormControlLabel control={<Checkbox />} label='< 2000 DA' />
                                    <FormControlLabel control={<Checkbox />} label='2000 - 5000 DA' />
                                    <FormControlLabel control={<Checkbox />} label='5000 - 10000 DA' />
                                    <FormControlLabel control={<Checkbox />} label='> 10000 DA' />
                                </FormControl>
                            </AccordionDetails>
                        </Accordion>
                        {(type && type !== 'electronics') && <Accordion>
                            <AccordionSummary expandIcon={<ExpandMore/>}>
                            Gendre
                            </AccordionSummary>
                            <AccordionDetails>
                                <FormControl>
                                        <FormControlLabel value='Men' control={<Checkbox />} label='Men' />
                                        <FormControlLabel value='Women' control={<Checkbox />} label='Women' />
                                </FormControl>
                            </AccordionDetails>
                        </Accordion>}
                        {(type && type === 'clothes') && <Accordion>
                            <AccordionSummary expandIcon={<ExpandMore/>}>
                            Clothing Type
                            </AccordionSummary>
                            <AccordionDetails>
                                <FormControl>
                                    <RadioGroup
                                        // aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue='All'
                                        name="radio-buttons-clothes-types"
                                    >
                                        <FormControlLabel value='All' control={<Radio />} label='All' />
                                        <FormControlLabel value='Hat' control={<Radio />} label='Hat' />
                                        <FormControlLabel value='Shirt' control={<Radio />} label='Shirt' />
                                        <FormControlLabel value='Jacket' control={<Radio />} label='Jacket' />
                                        <FormControlLabel value='Pants' control={<Radio />} label='Pants' />
                                        <FormControlLabel value='Short pants' control={<Radio />} label='Short pants' />
                                        <FormControlLabel value='Shoes' control={<Radio />} label='Shoes' />
                                        <FormControlLabel value='Underwears' control={<Radio />} label='Underwears' />
                                    </RadioGroup>
                                </FormControl>
                            </AccordionDetails>
                        </Accordion>}

                    </Box>
                </Box>
  )
}

export default FilterDrawer