import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = (props: any) => {
  let Cmp = props.Component;
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/');
    }
  }, []);

  return (
    <>
      <Cmp />
    </>
  );
};

export default ProtectedRoute;
