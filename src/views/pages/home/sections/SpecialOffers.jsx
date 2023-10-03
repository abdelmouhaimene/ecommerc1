import { offer } from "../../../../assets/images"
import { Button } from "../../../components"
const SpecialOffers = () => {
    return (
        <section
            id="Offers"
            className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container"
        >
            <div className="flex-1">
                <img src={offer} width={773} height={687} className="object-contain w-full" />
            </div>
            <div className="flex flex-1 flex-col ">
                <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
                    We Provide you
                    <span className="text-coral-red"> Super </span>
                    <span className="text-coral-red"> Quality </span> Shoes
                </h2>
                <p className="mt-4 lg:max-w-lg info-text">
                    Discover stylish Nike arrivals, quality confort and innovation for your active life
                </p>
                <p className="mt-4 lg:max-w-lg info-text">
                    Discover stylish Nike arrivals, quality confort and innovation for your active life
                </p>
                <div className="mt-11 flex flex-wrap gap-4">
                    <Button label="Shop now" />
                    <Button
                        label="Learn more"
                        bgColor="bg-white"
                        borderColor="border-slate-gray"
                        textColor="text-slate-gray"
                    />


                </div>
            </div>
        </section>
    )
}

export default SpecialOffers
