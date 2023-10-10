import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigate } from 'components/Navigate/Navigate';

export const Layout = () => {
  return (
    <>
      <Navigate />
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
