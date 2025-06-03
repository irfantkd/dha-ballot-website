import React, { Children, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ProtactiveRoutes = ({ Children }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) {
      return <div>{Children}</div>;
    } else {
      return navigate(-1);
    }
  }, [isAuthenticated, useNavigate]);
};

export default ProtactiveRoutes;
