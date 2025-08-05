import {Route,Routes,Navigate} from 'react-router'
import { public_routes, private_routes } from './router/index.js';
import { useContext } from 'react';
import { AuthContext } from './context/context.js';
import RotatingSquare from './rotatingSquare.jsx';
const AppRouter = () => {
    const {isAuth, setAuth, isLoading} = useContext(AuthContext);

    if (isLoading){
        return <RotatingSquare></RotatingSquare>
    }

    return (
        <Routes>
            {!isAuth ? (
            <>
            {
                public_routes.map(route => 
                    <Route path={route.path} element={<route.comp />} key={route.path} />
                )
            }
            <Route path="/*" element={<Navigate to="/login" />} />
            </>
            ):(
            <>
            {
                private_routes.map(route => 
                    <Route path={route.path} element={<route.comp />} key={route.path} />
                )
            }
            <Route path="/" element={<Navigate to="/items" />} />
            <Route path="/login" element={<Navigate to="/items" />} />
            <Route path="*" element={<Navigate to="/error" />} />
            </>
            )}
        </Routes>
    )

}

export default AppRouter;