import FormEmp from "../private-page/employee/FormEmp";
import ShowEmp from "../private-page/employee/ShowEmp";
import ListProduct from '../pages/ListProduct'
import Dashboard from "../private-page/employee/Dashboard";
import DashboardSale from "../private-page/employee/DashboardSale";
import DashboardUser from "../private-page/employee/DashboardUser";
import DashboardComment from "../private-page/employee/DashboardComment";
import DashboardCreateProduct from "../private-page/employee/DashboardCreateProduct";
import DashboardCoupon from "../private-page/employee/DashboardCoupon";
import DashboardCreateCoupon from "../private-page/employee/DashboardCreateCoupon";
import DashboardBrand from "../private-page/employee/DashboardBrand";
import DashboardUpdateCoupon from "../private-page/employee/DashboardUpdateCoupon";
import DashboardUpdateBrand from "../private-page/employee/DashboardUpdateBrand";
import DashboardCreateBrand from "../private-page/employee/DashboardCreateBrand";

export const PrivateRoute = [
  {
    id: 0,
    path: "/DashboardProduct",
    element: <ShowEmp />,
  },
  {
    id: 1,
    path: "/formEmp",
    element: <FormEmp />,
  },
  {
    id: '2',
    path: '/ListProduct',
    element: <ListProduct />,
},
{
  id: '3',
  path: '/',
  element: <Dashboard />,
},
{
  id: '4',
  path: '/Sale',
  element: <DashboardSale />,
},
{
  id: '5',
  path: '/User',
  element: <DashboardUser />,
},
{
  id: '6',
  path: '/Comment',
  element: <DashboardComment />,
},
{
  id: '7',
  path: '/CreateProduct',
  element: <DashboardCreateProduct />,
},
{
  id: '8',
  path: '/Coupon',
  element: <DashboardCoupon />,
},
{
  id: '9',
  path: '/CreateCoupon',
  element: <DashboardCreateCoupon />,
},
{
  id: '10',
  path: '/Brand',
  element: <DashboardBrand />,
},
{
  id: '11',
  path: '/UpdateCoupon',
  element: <DashboardUpdateCoupon />,
},
{
  id: '12',
  path: '/UpdateBrand',
  element: <DashboardUpdateBrand />,
},
{
  id: '12',
  path: '/CreateBrand',
  element: <DashboardCreateBrand />,
},
];