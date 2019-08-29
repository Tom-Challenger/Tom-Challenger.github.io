export default class DummyPortfolioService {
	data = [
			{
				id: 1,
				title: 'Барбершоп &laquoБородинский&raquo',
				decription: ''
			},		
			{
				id: 2,
				title: 'Дизайн студия &laquoNerds&raquo',
				decription: ''
			},
			{
				id: 3,
				title: 'ToDo Application',
				decription: ''
			},
			{
				id: 4,
				title: 'StarDB Application',
				decription: ''
			},
			{
				id: 5,
				title: 'Re-Store Application',
				decription: ''
			}
	]

	getWorks() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				console.log('Promise :: setTimeout')
				if (Math.random() > 0.25) {
					resolve(this.data)
				}
				else {
					reject(new Error('DummyPortfolioService :: getWorks() :: Timeout'))
				}
			}, 700)
		})
	}
}