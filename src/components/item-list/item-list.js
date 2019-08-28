import React from 'react'

import ItemDetails from '../item-details'

import './item-list.css'

const ItemList = (props) => {
	const initProps = {
		data: [
			{title: '1'},
			{title: '2'}
		]
	}
	const items = initProps.data.map((item, i) => {
		return (
			<li key={i}
				className="item-reset">
				{item.title}
			</li>
		)
	})

	return (
		<ul className="list-reset">
			{items}
		</ul>
	)
}

export default ItemList