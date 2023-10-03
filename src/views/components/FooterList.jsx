
const FooterList = ({ title, links }) => {
    return (
        <div >
            <h3 className="text-white text-xl font-bold">{title}</h3>
            <ul className="mt-4">
                {links.map((link) => (
                    <li key={link.name}
                        className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer "
                    >
                        <a
                            href={link.link}
                        >
                            <p >
                                {link.name}
                            </p>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FooterList
