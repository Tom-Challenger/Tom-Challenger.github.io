import React, { Fragment } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import PageHeader from '../page-header'
import { HomePage, PortfolioPage } from '../pages'

import './app.css'

const App = () => {

	return (
		<div className="app">
		<Fragment>
			<PageHeader />
			<Switch>
				<Route path="/" component={PortfolioPage} exact={true} />
				<Route path="/portfolio" component={PortfolioPage} exact={true} />
				
				<Redirect to="/" />
			</Switch>
		</Fragment>
		</div>
	)
}

export default App