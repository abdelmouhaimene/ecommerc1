import { copyrightSign } from "../../assets/icons"
import { footerLogo } from "../../assets/images"
import { FooterList } from "../components"
import { footerLinks, socialMedia } from "../../data"
import { Link } from "react-router-dom"

const Footer = () => {
    const getYear = () => {
        return new Date().getFullYear();
    }
    return (
        <footer
            id="contact-us"
            className="max-container"
        >
            <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
                <div className="flex flex-col items-start">
                    <a href="/">
                        <img
                            src={footerLogo}
                            alt="footerLogo"
                            height={46}
                            width={150}
                        />
                    </a>
                    <p className='mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm'>
                        Get shoes ready for the new term at your nearest Nike store. Find
                        Your perfect Size In Store. Get Rewards
                    </p>
                    <div className="flex items-center gap-5 mt-8">
                        {
                            socialMedia.map((icon) => (
                                <Link key={icon.alt} to={icon.link}>
                                    <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full hover:bg-white-400">
                                        <img
                                            alt={icon.alt}
                                            src={icon.src}
                                            height={24}
                                            width={24}
                                        />
                                    </div>
                                </Link>
                            ))
                        }
                    </div>

                </div >
                <div className="flex justify-between lg:gap-10 gap-20 max-md:flex-col">
                    {
                        footerLinks.map((list) => (

                            <FooterList key={list.title}  {...list} />

                        ))
                    }
                </div>
            </div>
            <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
                <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
                    <img
                        src={copyrightSign}
                        alt="copy right"
                        width={20}
                        height={20}
                        className="rounded-full m-0"
                    />
                    <p>Copyright {getYear()} . All rights reserved.</p>
                </div>
                <p className="font-montserrat cursor-pointer">

                </p>
            </div>






        </footer>
    )
}

export default Footer
