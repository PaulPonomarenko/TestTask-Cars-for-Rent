import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { lazy } from 'react';

const HomePage = lazy(() => import('../pages/Home'));
const FavoritePage = lazy(() => import('../pages/Favorite'));
const CatalogPage = lazy(() => import('../pages/Catalog'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />}></Route>
        <Route path="/catalog" element={<CatalogPage />}></Route>
        <Route path="/favorites" element={<FavoritePage />}></Route>
      </Route>
    </Routes>
  );
};
