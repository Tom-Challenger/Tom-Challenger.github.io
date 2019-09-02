import React from 'react'
/*
const {
	Provider: PortfolioServiceProvider,
	Consumer: PortfolioServiceConsumer
} = React.createContext()*/

const PersonalPageServiceContext = React.createContext()
const PersonalPageServiceProvider = PersonalPageServiceContext.Provider
const PersonalPageServiceConsumer = PersonalPageServiceContext.Consumer

export {
	PersonalPageServiceContext,
	PersonalPageServiceProvider,
	PersonalPageServiceConsumer
}