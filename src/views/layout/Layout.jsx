import { useEffect, useState, createContext } from 'react';
import { Outlet, useLocation } from 'react-router-dom'
import Nav from './Nav';
import Footer from './Footer';
// import { useSelector } from 'react-redux'
export const SelectedContext = createContext();
const Layout = () => {
    const location = useLocation();
    const [selected, setSelected] = useState(location.pathname === "/" ? "/home" : location.pathname)
    // const langue = useSelector(state => state.langue.value)
    // const [id, setId] = useState(langue === 'Ar' ? "rtl" : "ltr")
    // useEffect(() => setId(langue === 'Ar' ? "rtl" : "ltr"), [langue])
    return (
        <SelectedContext.Provider value={{ selected, setSelected }}>
            <div
            // id={id}
            >
                <div>
                    <Nav />
                    <div >
                        <Outlet />
                    </div>
                    <section className="bg-black padding-x padding-t pb-8">
                        <Footer />
                    </section>
                </div>
            </div>
        </SelectedContext.Provider>

    );

}

export default Layout