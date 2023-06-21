import Login from '../pages/Login'
import Register from '../pages/Register'
import CreateProduct from '../pages/CreateProduct'
import Home from '../pages/Home'
import Cart from '../pages/Cart'
import ListProduct from '../pages/ListProduct'
import Products from '../pages/Products'
import { SideBarPrivate } from '../layout/private/SideBar.Private'
import SingleProduct from '../pages/SingleProduct'
import Error from '../pages/Error'
import Checkout from '../pages/Checkout'
import Contact from '../pages/Contact'
import Receipt from '../pages/Receipt'
import CreateComment from '../pages/CreateComment'

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
        path: '/CreateProduct',
        element: <CreateProduct />,
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
        path: '/products/:productId',
        element: <SingleProduct />,
    },
    {
        id: '8',
        path: '/sidebarprivate',
        element: <SideBarPrivate />,
    },
    {
        id: '9',
        path: '*',
        element: <Error />,
    },
    {
        id: '10',
        path: '/Checkout',
        element: <Checkout />,
    },
    {
        id: '11',
        path: '/Contact',
        element: <Contact />,
    },
    {
        id: '12',
        path: '/Receipt',
        element: <Receipt />,
    },
    {
        id: '13',
        path: '/CreateComment',
        element: <CreateComment />,
    },
]
