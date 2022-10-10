import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Home } from './pages/Home';
import { Store } from './pages/Store';
import  AsyncAwait from './pages/StoreViaJSONURL';
import { SearchPage }  from './pages/SearchPage';
import { Navbar } from './components/Navbar';
import { ShoppingBasketProvider } from './context/ShoppingBasketContext';


function App() {
  return (
    <ShoppingBasketProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/storeviajsonurl" element={<AsyncAwait />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </Container>
    </ShoppingBasketProvider>
  );
}

export default App;
