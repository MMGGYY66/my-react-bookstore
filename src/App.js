import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Books from './components/routes/Books';
import Categories from './components/routes/Categories';
import NoMatch from './components/routes/NoMatch';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Books />} />
        <Route path="books" element={<Books />} />
        <Route path="categories" element={<Categories />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
