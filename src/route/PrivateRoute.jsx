import FormEmp from "../private-page/employee/FormEmp";
import ShowEmp from "../private-page/employee/ShowEmp";
import ListProduct from '../pages/ListProduct'
import Dashboard from "../private-page/employee/Dashboard";
import DashboardSale from "../private-page/employee/DashboardSale";
import DashboardUser from "../private-page/employee/DashboardUser";
import DashboardComment from "../private-page/employee/DashboardComment";
import DashboardCreateProduct from "../private-page/employee/DashboardCreateProduct";

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
];