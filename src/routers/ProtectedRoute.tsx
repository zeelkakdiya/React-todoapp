import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute2 = (props: any) => {
  let Cmp = props.Component;
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login');
    }
  }, []);

  return (
    <>
      <Cmp />
    </>
  );
};

export default ProtectedRoute2;
