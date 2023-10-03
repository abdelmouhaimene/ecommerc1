import { Button } from "../../../components"
import { shoe8 } from "../../../../assets/images"
const SuperQuality = () => {
    return (
        <section
            id="about-us"
            className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
        >
            <div className="flex flex-1 flex-col ">
                <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
                    We Provide you
                    <span className="text-coral-red"> Super </span>
                    <span className="text-coral-red"> Quality </span> Shoes
                </h2>
                <p className="mt-4 lg:max-w-lg info-text">
                    Discover stylish Nike arrivals, quality confort and innovation for your active life
                </p>
                <div className="mt-11">
                    <Button label="Show now" > </Button>
                </div>
            </div>
            <div className="flex-1 flex justify-center items-center">
                <img src={shoe8} alt="shoe8" width={570} height={522} />
            </div>
        </section>
    )
}

export default SuperQuality
