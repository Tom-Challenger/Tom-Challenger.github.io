export default class DummyPersonalPageService {
	_linkbase = 'https://tom-challenger.github.io'
	/*Главная страница. 
	Страница магазина, какталог товаров. 
	Страница подробного описания товара, карточка товара.
	Всплывающие окна. 
	Интерактивная карта.
	Анимация.*/
	data = [
			{
				id: 1,
				title: `Барбершоп \u00ABБородинский\u00BB`,
				description: `Учебный проект. Верстка по PSD-макету.`,
				link: `${this._linkbase}/borodinski/`
			},		
			{
				id: 2,
				title: 'Дизайн студия \u00ABNerds\u00BB',
				description: '',
				link: `${this._linkbase}/nerds/`
			},
			{
				id: 3,
				title: 'ToDo Application',
				description: '',
				link: `${this._linkbase}/todo/`
			},
			{
				id: 4,
				title: 'StarDB Application',
				description: '',
				link: `${this._linkbase}/star-db/`
			},
			{
				id: 5,
				title: 'Re-Store Application',
				description: '',
				link: `${this._linkbase}/re-store/`
			}
	]

	getPortfolio() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				console.log('DummyPersonalPageService::getWorks()::Promise::setTimeout()')
				if (Math.random() > 0.05) {
					resolve(this.data)
				}
				else {
					reject(new Error('DummyPersonalPageService::getWorks()::Promise::setTimeout()::reject'))
				}
			}, 700)
		})
	}
}