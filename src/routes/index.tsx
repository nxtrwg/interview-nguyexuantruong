import { Route, Routes } from 'react-router'

/** layouts */
import EmptyLayout from './../layouts/empty'
import DefaultLayout from './../layouts/default'

/** pages */
import Login from './../pages/auth/login'
import Signup from './../pages/auth/signup'
import Contact from '../pages/contact'

export default function RoutesApp() {
    return (
        <Routes>
            <Route element={<DefaultLayout />} >
                <Route path='/' element={<Contact />} />
            </Route>
            <Route element={<EmptyLayout />}>
                <Route path="/login" element={<Login />} />
                <Route path='/signup' element={<Signup />} />
            </Route>
        </Routes>
    )
}