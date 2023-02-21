import Login from '../pages/Login'
import Register from '../pages/Register'
import ProductDetail from '../pages/ProductDetail'
import ShopCatgory from '../pages/ShopCatgory'
import Home from '../pages/Home'
import Cart from '../pages/Cart'
import Contact from '../pages/Contact'
import Team from '../pages/Team'
import { SideBarPrivate } from '../layout/private/SideBar.Private'

export const PublicRoute = [
    {
        id: '1',
        path: '/Login',
        element: <Login />,
    },
    {
        id: '2',
        path: '/Register',
        element: <Register />,
    },
    {
        id: '3',
        path: '/ProductDetail',
        element: <ProductDetail />,
    },
    {
        id: '4',
        path: '/ShopCatgory',
        element: <ShopCatgory />,
    },
    {
        id: '5',
        path: '/',
        element: <Home />,
    },
    {
        id: '6',
        path: '/Cart',
        element: <Cart />,
    },
    {
        id: '7',
        path: '/Contact',
        element: <Contact />,
    },
    {
        id: '8',
        path: '/team',
        element: <Team />,
    },
    {
        id: '9',
        path: '/sidebarprivate',
        element: <SideBarPrivate />,
    },

]
