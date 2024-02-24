import Button from "./Button"
import { Typography, Box } from "@mui/material"
import { ShoppingCartOutlined } from "@mui/icons-material"
import { useNavigate } from "react-router-dom"
import { SelectedContext } from "../layout/Layout"
import { useContext } from "react"
const CategoryCard = ({ imgURL, name, products }) => {
    const navigate = useNavigate() 
    const { selected, setSelected } = useContext(SelectedContext)
    return (
        <Box
            className="h-full rounded-md flex flex-col "
            style={{ backgroundImage: `url(${imgURL})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <Box className='h-1/2 flex justify-center items-end sm:pb-2 pb-4'>
                <Typography className='font-palanquin font-bold text-white text-4xl drop-shadow-2xl '>
                    {name}
                </Typography>
            </Box>
            <Box className='h-1/2 p-4 gap-4 flex flex-col justify-end items-start '>
                <Typography className='font-palanquin font-bold text-white text-xl '>
                    {products} products
                </Typography>
                <Button label="Shop now" iconURL={<ShoppingCartOutlined />} action={() =>{ navigate('/products/'+name); setSelected('/products')}}/>
            </Box>
        </Box>
    )
}

export default CategoryCard

