import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/navigation';
import BooksWrapper from './components/booksWrapper';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<BooksWrapper />} />
        <Route path="/categories" element={<h1>categories</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
