import React from 'react'
/*
const {
	Provider: PortfolioServiceProvider,
	Consumer: PortfolioServiceConsumer
} = React.createContext()*/

const PortfolioServiceContext = React.createContext()
const PortfolioServiceProvider = PortfolioServiceContext.Provider
const PortfolioServiceConsumer = PortfolioServiceContext.Consumer

export {
	PortfolioServiceContext,
	PortfolioServiceProvider,
	PortfolioServiceConsumer
}