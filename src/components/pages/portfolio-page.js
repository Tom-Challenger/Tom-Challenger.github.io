import React from 'react'

const PortfolioListItem = ({ title, description }) => {
	return (
		<li>
			<p>{title}</p>
			<p>{description}</p>
		</li>
	)
}

const PortfolioList = ({ data }) => {

	return (
		<ul>
			{ 
				data.map((item) => {
					<PortfolioListItem title={item.title} />
				})
			}
		</ul>
	)
}

const PortfolioPage = () => {
	return (

	)
}

export default PortfolioPage