import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './routes/Main';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
