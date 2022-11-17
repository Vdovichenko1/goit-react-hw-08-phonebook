import { lazy, Suspense, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { PacmanLoader } from 'react-spinners';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/authOperations';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import { ChakraProvider } from '@chakra-ui/react';

const Home = lazy(() => import('../redux/auth/pages/Home'));
const Register = lazy(() => import('../redux/auth/pages/Register'));
const Login = lazy(() => import('../redux/auth/pages/Login'));
const Contacts = lazy(() => import('../redux/auth/pages/Contacts'));
const Layout = lazy(() => import('../redux/auth/pages/Layout'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <ChakraProvider>
      <Suspense fallback={<PacmanLoader color="orange" />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="/register"
              element={
                <PublicRoute
                  redirectTo="/contacts"
                  component={<Register />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute
                  redirectTo="/contacts"
                  component={<Login />}
                />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute redirectTo="/login" component={<Contacts />} />
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Suspense>
    </ChakraProvider>
  );
}
