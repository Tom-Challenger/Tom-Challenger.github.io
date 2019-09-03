export default class DummyPersonalPageService {
	_linkbase = 'https://tom-challenger.github.io'

	data = [
			{
				id: 1,
				title: 'Барбершоп &laquoБородинский&raquo',
				decription: '',
				link: `${this._linkbase}/borodinski/`
			},		
			{
				id: 2,
				title: 'Дизайн студия &laquoNerds&raquo',
				decription: '',
				link: `${this._linkbase}/nerds/`
			},
			{
				id: 3,
				title: 'ToDo Application',
				decription: '',
				link: `${this._linkbase}/todo/`
			},
			{
				id: 4,
				title: 'StarDB Application',
				decription: '',
				link: `${this._linkbase}/star-db/`
			},
			{
				id: 5,
				title: 'Re-Store Application',
				decription: '',
				link: `${this._linkbase}/re-store/`
			}
	]

	getPortfolio() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				console.log('DummyPersonalPageService::getWorks()::Promise::setTimeout()')
				if (Math.random() > 0.25) {
					resolve(this.data)
				}
				else {
					reject(new Error('DummyPersonalPageService::getWorks()::Promise::setTimeout()::reject'))
				}
			}, 700)
		})
	}
}