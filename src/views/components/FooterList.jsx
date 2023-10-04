import { Link } from "react-router-dom"
const FooterList = ({ title, links }) => {
    return (
        <div >
            <h3 className="text-white text-xl font-bold">{title}</h3>
            <ul className="mt-4  list-none">
                {links.map((link) => (
                    <li key={link.name}

                    >
                        <Link
                            to={link.link}
                            className="no-underline"
                        >
                            <p className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer ">
                                {link.name}
                            </p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FooterList
