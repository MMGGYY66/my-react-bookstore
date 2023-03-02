import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';

// Pages
import RootLayout from './Components/RootLayout/RootLayout';
import BooksPage from './pages/Books/BooksPage';
import CategoriesPage from './pages/Categories/CategoriesPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<BooksPage />} />
      <Route index path="books" element={<BooksPage />} />
      <Route path="categories" element={<CategoriesPage />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
