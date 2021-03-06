import React, { useCallback, useEffect } from 'react'
import Categories from '../../components/categories'
import SortPopup from '../../components/sort-popup'
import PizzaItem from '../../components/pizza-item'
import LoadingBlock from '../../components/loading-block'
import { setCategory, setSortBy } from '../../redux/actions/filters'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPizzas } from '../../redux/actions/pizzas'

const categoryNames = ['Пицца', 'Напитки', 'Закуски', 'Десерты']
const sortItems = [
	{ name:'популярности', type: 'popular', order: 'desc' },
	{ name:'цене', type: 'price', order: 'desc' },
	{ name:'алфавиту', type: 'name', order: 'asc' }
]

const Home = () => {

	const dispatch = useDispatch()

	const items = useSelector(( { pizzas }) => pizzas.items)
	const cartItems = useSelector(( { cart }) => cart.items)
	const isLoaded = useSelector(( { pizzas }) => pizzas.isLoaded)
	const { category, sortBy } = useSelector(( { filters }) => filters)

	useEffect(() => {
			dispatch(fetchPizzas(sortBy, category))
	},[category, dispatch, sortBy])

	const onSelectCategory = useCallback((index) => {
		dispatch(setCategory(index))
	}, [dispatch])

	const onSelectSortType = useCallback((type) => {
		dispatch(setSortBy(type))
	}, [dispatch])

	const handlePizzaToCart = obj => {
		dispatch({
			type: 'ADD_PIZZA_CART',
			payload: obj
		})
	}

	return (
		<div className="container">
			<div className="content__top">
				<Categories
					activeCategory={ category }
					onClickCategory={ onSelectCategory }
					items={ categoryNames }
				/>
				<SortPopup
					activeSortType={ sortBy.type }
					items={ sortItems }
					onClickSortType={ onSelectSortType }
				/>
			</div>
			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">
				{
					isLoaded
						? items.map((obj) => ( <PizzaItem
							onClickAddPizza={ handlePizzaToCart }
							key={ obj.id }
							addedCount={ cartItems[obj.id] && cartItems[obj.id].items.length }
							{ ...obj }
						/> ))
						// : <LoadingBlock />
						: Array(12)
							.fill(0)
							.map((_, index) => <LoadingBlock key={index} />)
				}
			</div>
		</div>
	)
}

export default Home
