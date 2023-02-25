import Login from '../pages/Login'
import Register from '../pages/Register'
import ProductDetail from '../pages/ProductDetail'
import Home from '../pages/Home'
import Cart from '../pages/Cart'
import Contact from '../pages/Contact'
import Products from '../pages/Products'
import { SideBarPrivate } from '../layout/private/SideBar.Private'
import SingleProduct from '../pages/SingleProduct'

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
        path: '/products',
        element: <Products />,
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
        path: '/products/:productId',
        element: <SingleProduct />,
    },
    {
        id: '9',
        path: '/sidebarprivate',
        element: <SideBarPrivate />,
    },

]
