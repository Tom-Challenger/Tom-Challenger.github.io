import React, { Fragment, useState } from 'react'

import DummyPortfolioService from '../../services/dummy-portfolio-service'
import { PortfolioServiceProvider } from '../portfolio-service-context'

import PageHeader from '../page-header'
import { HomePage } from '../pages'

const App = () => {
	/* Try use React.hooks */
	const [portfolioService, setPortfolioService] = useState(new DummyPortfolioService())
	const service = portfolioService
	 	
	return (
		<Fragment>
			<PageHeader />
			<PortfolioServiceProvider value={service}>
				<HomePage />
			</PortfolioServiceProvider>
		</Fragment>
	)
}

export default App