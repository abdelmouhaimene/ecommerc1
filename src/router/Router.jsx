import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../views/layout/Layout';
import routes from './routes';
const createRoutes = (routes) => {
    return routes.map((route, index) => {
        return (
            <Route key={index} path={route.path} element={route.element} />
        );
    });
};

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    {createRoutes(routes)}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router

