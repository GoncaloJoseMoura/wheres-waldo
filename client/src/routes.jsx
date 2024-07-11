import Layout from './Layout';
import ErrorPage from './ErrorPage';
import Game from './Game';

const routes = [
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/leaderboard',
    element: <Layout />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/game/:id',
    element: <Game />,
    errorElement: <ErrorPage />,
  },
];

export default routes;
