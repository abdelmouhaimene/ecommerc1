import { Box } from "@mui/material"
import { headerLogo } from '../../assets/images'

const Loading = () => {
    return (
        <Box className="h-screen w-scren flex items-center justify-center">
            <div className="flex items-center justify-center  relative">
                <div className="h-60 w-60 border-t-8 border-solid border-b-4 border-coral-red rounded-full animate-spin absolute "></div>
                <div className="absolute h-40 w-40  flex items-center justify-center">
                    <img
                        src={headerLogo}
                        className="w-full h-auto animate-pulse"
                    />
                </div>

            </div>
        </Box>

    )
}

export default Loading
