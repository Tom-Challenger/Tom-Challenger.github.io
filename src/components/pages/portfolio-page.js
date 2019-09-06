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
			<h3 className="portfolio-title">{title}</h3>
			<p className="portfolio-description">{description}</p>
			<div className="portfolio-group--bottom">
				<a className="portfolio-link" href={link} target="_blank">Открыть</a>
				<button className="portfolio-details">Подробнее</button>
			</div>
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
			return (
				<section className="portfolio-section">
					<PortfolioList items={portfolio} />
				</section>
			)
		case 'FAILURE':
			return <ErrorIndicator />
	}
}

export default PortfolioPage