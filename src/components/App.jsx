import { Route, Routes } from 'react-router-dom';
import { ShoppingCartPage, ShopsPage, NotFoundPage } from '../pages';
import { SharedLayout } from '../components';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="/" index element={<ShopsPage />} />
        <Route path="/cart" element={<ShoppingCartPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
