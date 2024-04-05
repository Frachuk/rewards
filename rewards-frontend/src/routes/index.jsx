import { Navigate, createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { LoginPage } from '../pages/login';
import { RegisterPage } from '../pages/register';
import { useAuth } from '../providers/Auth';
import { DashboardPage } from '../pages/dashboard';
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {
  const { accountData } = useAuth();
  return accountData?.name ? children : <Navigate to="/login" />;
};

PrivateRoute.propTypes = {
  children: PropTypes.any,
};

export const router = createBrowserRouter([
  {
    path: '*',
    element: <h1>Not found page</h1>,
  },
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <DashboardPage />
      </PrivateRoute>
    ),
  },
]);
