import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import About from './pages/About'
import Search from './pages/Search'
import Product from './pages/Product'

export default function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/product/:id" element={<Product />} />

                <Route path="/about" element={<About />} />

                <Route path="/search" element={<Search />} />

                <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
        </>
    )
}
