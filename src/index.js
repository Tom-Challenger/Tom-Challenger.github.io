import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import ErrorBoundary from './components/error-boundary'

import DummyPersonalPageService from './services/dummy-personal-page-service'
import { PersonalPageServiceProvider } from './components/personal-page-service-context'

import App from './components/app'

const personalPageService = new DummyPersonalPageService()

ReactDOM.render(
	<ErrorBoundary>
		<PersonalPageServiceProvider value={personalPageService}>
			<Router>
				<App />
			</Router>
		</PersonalPageServiceProvider>
	</ErrorBoundary>,
	document.getElementById('root'))