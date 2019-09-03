import React from 'react'

import './portfolio-page.css'

import { useState, useEffect, useContext } from 'react'
import { PersonalPageServiceContext } from '../personal-page-service-context'

import LoadingIndicator from '../loading-indicator'
import ErrorIndicator from '../error-indicator'

import ErrorBoundary from '../error-boundary'

const PortfolioListItem = ({ title, description, link}) => {
	return (
		<li className="portfolio-item">
			<h3>{title}</h3></a>
			<p className="portfolio-description">{description}</p>
			<a className="button portfolio-link--overview" href={link}>Обзор</a>
			<a className="button portfolio-link--details" href={link}>Подробнее</a>
		</li>
	)
}

const PortfolioList = ({ items }) => {
	return (
		<ul className="portfolio-list">
			{items.map((item) => 
				<PortfolioListItem key={item.id} {...item} />
			)}
		</ul>
	)
}

const PortfolioPage = () => {
	const personalPageService = useContext(PersonalPageServiceContext)
	const [{ status, portfolio }, updateState] = useState({ status:'REQUEST', portfolio: [] })

	useEffect(() => {
		personalPageService.getPortfolio()
			.then((portfolio) => {
				updateState({
					status:'SUCCESS', 
					portfolio: portfolio
				})
			})
			.catch(() => {
				updateState({
					status:'FAILURE', 
					portfolio: null
				})
			})
	}, [])
	
	switch (status) {
		case 'REQUEST':
			return (<LoadingIndicator />)
		case 'SUCCESS':
			return (<PortfolioList items={portfolio} />)
		case 'FAILURE':
			return <ErrorIndicator />
	}
}

export default PortfolioPage