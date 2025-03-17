import { Navigate, Route, Routes } from 'react-router'

/** layouts */
import EmptyLayout from './../layouts/empty'
import DefaultLayout from './../layouts/default'

/** pages */
import Login from './../pages/auth/login'
import Contact from '../pages/contact'
import { getCurrentUser } from '../pages/auth/auth'
import { ReactNode } from 'react';

interface PrivateRouteProps {
    children: ReactNode;
}

export default function RoutesApp() {
    return (
        <Routes>
            <Route element={<DefaultLayout />} >
                <Route path='/' element={<PrivateRoute><Contact /></PrivateRoute>} />
            </Route>
            <Route element={<EmptyLayout />}>
                <Route path="/login" element={<Login />} />
            </Route>
        </Routes>
    )
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
    return getCurrentUser() ? children : <Navigate to="/login" replace />;
};