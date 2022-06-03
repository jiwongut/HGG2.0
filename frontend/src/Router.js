import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Category from './routes/category/Category';
import Main from './routes/Main';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/category" element={<Category />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
