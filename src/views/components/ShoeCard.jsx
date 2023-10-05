
const ShoeCard = ({ imgUrl, changeBigShoeImage, bigShoeImage }) => {
    const handleClick = () => {
        if (bigShoeImage !== imgUrl.bigShoe) {
            changeBigShoeImage(imgUrl.bigShoe)
        }
    }
    return (
        <div
            className={`border-2 rounded-xl
            w-full h-auto
            ${bigShoeImage === imgUrl.bigShoe
                    ? 'border-coral-red'
                    : 'border-transparent'
                } cursor-pointer max-sm:flex-1  `
            }
            onClick={handleClick}
        >
            <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4  ">
                <img src={imgUrl.thumbnail} alt="shows" height={103} width={127}
                    className="object-contain w-full h-auto"
                />
            </div>
        </div>
    )
}

export default ShoeCard
