import React from 'react'

import './page-header.css'

const PageHeader = () => {
	return (
		<header className="page-header">
			<div className="header-logo">
				<h1 className="header-logo__title">Tom Challenger</h1>
				<p className="header-logo__description">Web & Frontend developer</p>
			</div>
			<nav className="header-navigation">
				<ul className="main-navigation main-navigation--row">
					<li className="main-navigation__item"><a className="main-navigation__link" href="/home">Главная</a></li>
					<li className="main-navigation__item"><a className="main-navigation__link" href="/portfolio">Портфолио</a></li>
					<li className="main-navigation__item"><a className="main-navigation__link" href="/about">Обо мне</a></li>
					<li className="main-navigation__item"><a className="main-navigation__link" href="/Contacts">Контакты</a></li>
				</ul>
			</nav>
		</header>
	)
}

export default PageHeader