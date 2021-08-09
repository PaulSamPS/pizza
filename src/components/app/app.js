import React from 'react'
import { Route } from 'react-router-dom'
import Header from '../header'
import Home from '../../pages/home'
import Cart from '../../pages/cart'
import Footer from '../footer'

const App = () => {

	return (
		<div className="wrapper">
			<Header />
			<div className="content">
				<Route exact path='/' component={ Home } />
				<Route exact path='/cart' component={ Cart } />
			</div>
			<Footer />
		</div>
	)
}

export default App
