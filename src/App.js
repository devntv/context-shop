import React from 'react'
import './index.css'
import Header from './components/Header'
import Product from './components/Product'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import { DataProvider } from './components/DataContext/DataProvider'
import Detail from './components/Detail'
import Cart from './components/Cart'


function App() {
  return (
    <DataProvider>
      <div className="App">
        <Router>
          <Header />

          <section>
            <Routes>
              <Route path="/" element={<Product />} />
              <Route path="products" element={<Product />} />
              <Route path="products/:id" element={<Detail />} />
              <Route path="carts" element={<Cart />} />
            </Routes>
          </section>
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;
