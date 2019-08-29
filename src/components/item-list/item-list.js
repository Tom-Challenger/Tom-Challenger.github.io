import React, { useState, useContext } from 'react'

import { PortfolioServiceContext } from '../portfolio-service-context'

import ItemDetails from '../item-details'

import './item-list.css'

const ItemList = () => {
	const service = useContext(PortfolioServiceContext)
	const [list, setList] = useState(undefined)
	console.log(list)

	if (!list) {
	service.getWorks()
		.then((data) => setList((list) => { console.log(`setList: ${list}`); return data}))
	console.log(list)

	/*setList(
		(prevList)=> {
			console.log(`setList: ${prevList}`)
			return [{title:'1'},{title:'2'}]
		}
	)*/
	}


	if (!list) {
		return (
			<p>Loading ...</p>
		)
	}

	return (
		<ul className="list-reset">
			{
				list.map((item, i) => {
					return (
						<li key={i}>
							<ItemDetails title={item.title} />
						</li>
					)
				})
			}
		</ul>
	)
}

export default ItemList
