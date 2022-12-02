import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ActiveTodos from '../pages/ActiveTodos';
import CompeletedTodos from '../pages/CompletedTodos';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import UsersPage from '../pages/UsersPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute2 from './ProtectedRoute';
import ProtectedRoute from './ProtectedRoute2';

const Routing = () => {
  return (
    <div>
      <BrowserRouter>
        <ToastContainer
          autoClose={5173}
          position={'top-center'}
          hideProgressBar={true}
        />
        <Routes>
          <Route
            path="/login"
            element={<ProtectedRoute2 Component={Login} />}
          />
          <Route
            path="/signUp"
            element={<ProtectedRoute2 Component={SignUp} />}
          />

          <Route
            path="/active"
            element={<ProtectedRoute Component={ActiveTodos} />}
          />
          <Route
            path="/completed"
            element={<ProtectedRoute Component={CompeletedTodos} />}
          />
          <Route
            path="/users"
            element={<ProtectedRoute Component={UsersPage} />}
          />

          {/* Default Page Active Todos */}
          <Route
            path="/"
            element={<ProtectedRoute Component={ActiveTodos} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routing;
