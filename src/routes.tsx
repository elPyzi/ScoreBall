import { RouteObject } from 'react-router-dom';
import Layout from './components/Layout';
import Homepage from './pages/Homepage';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
    ],
  },
];
