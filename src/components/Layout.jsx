import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import ProductViewModal from './ProductViewModal'

import Header from './Header'
import Footer from './Footer'
import Router from '../routes/Router'
const Layout = () => {
    return (
        <BrowserRouter>
            {/* <Route render={props => (      )} /> */}
                <div>
                    {/* <Header {...props} /> */}
                    <div className="container">
                        <Header />
                        <div className="main">
                            <Router />
                        </div>
                    </div>
                    <Footer />
                    <ProductViewModal />
                </div>
      
        </BrowserRouter>
    )
}

export default Layout
