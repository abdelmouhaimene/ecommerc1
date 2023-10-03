import {
    Services,
    SpecialOffers,
    Subscribe,
    SuperQuality,
    CustomerReviews,
    Hero,
    Popular
} from "./sections"
const Home = () => {
    return (
        <main className="relative">
            <section className="xl: padding-l wide: padding-r padding-b">
                <Hero />
            </section>
            <section className="padding">
                <Popular />
            </section>
            <section className="padding">
                <SuperQuality />
            </section>
            <section className="padding-x py-10">
                <Services />
            </section>
            <section className="padding">
                <SpecialOffers />
            </section>
            <section className="padding">
                <CustomerReviews />
            </section>
            <section className="padding-x sm:py-32 py-10 w-full">
                <Subscribe />
            </section>

        </main>
    )
}

export default Home