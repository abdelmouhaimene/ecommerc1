import { reviews } from "../../../../data"
import { ReviewCard } from "../../../components"
const CustomerReviews = () => {
    return (
        <section
            id="CustomerReviews"
            className="max-container"
        >
            <h3 className="font-planquin text-center text-4xl font-bold ">
                What Our
                <span className="text-coral-red "> Customers </span>
                Say ?
            </h3>
            <p className="info-text m-auto mt-4 maw-x-lg text-center">
                Hear genuine stories from our satisfed customers about thier exceptional experiences with us.
            </p>
            <div className="flex flex-1 mt-24 justify-evenly items-center gap-14 max-lg:flex-col">
                {reviews.map((review) => (
                    <ReviewCard key={review.customerName}
                        imgURL={review.imgURL}
                        customerName={review.customerName}
                        rating={review.rating}
                        feedback={review.feedback} />
                ))}
            </div>
        </section>
    )
}

export default CustomerReviews
