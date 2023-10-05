import { errorPic } from '../../../assets/images'
import { Box, Typography } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Button } from '../../components'
import { ArrowCircleLeft } from '@mui/icons-material'
const Error = () => {
    const { t } = useTranslation()
    const location = useLocation().pathname;
    const navigate = useNavigate()
    return (
        <Box className="min-h-screen  padding-s  flex justify-center items-center "  >
            <Box className="mt-6 flex justify-center items-center flex-col" >
                <Typography variant='h1' textAlign="center" className='font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
                    {t("Error")} <span className='text-coral-red' > 404 </span>
                </Typography>
                <Typography fontSize="26px" textAlign="center" className='font-palanquin'>
                    {t("Page")} <span className='text-coral-red' > &quot; {location} &quot; </span> {t("not found")}
                </Typography>
                <Box className='max-w-[500px] ' >
                    <img src={errorPic} alt='error404' className='object-contain w-full h-auto' />
                </Box>
                <Button label="Back" iconURL={< ArrowCircleLeft />} action={() => navigate(-1)} />
            </Box>
        </Box>
    )
}

export default Error
