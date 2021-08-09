import React, { useState } from 'react'
import classNames from 'classnames'

const PizzaItem = (obj) => {
	const {
		id,
		imageUrl,
		name,
		title,
		price,
		types,
		sizes,
		capacity,
		onClickAddPizza,
		category,
		addedCount
	} = obj

	const availableTypes = ['тонкое','традиционное']
	const availableSizes = [25, 30, 35]
	const [activeType, setActiveType] = useState(types[0])
	const [activeSize, setActiveSize] = useState(0)

	const onSelectType = (index) => {
		setActiveType(index)
	}

	const onSelectSize = (index) => {
		setActiveSize(index)
	}

	const onAddPizza = () => {
		const obj = {
			id,
			name,
			imageUrl,
			price,
			title,
			category,
			capacity,
			size: availableSizes[activeSize],
			type: availableTypes[activeType]
		}
		onClickAddPizza(obj)
	}

	return (
		<div className="pizza-block">
			<img
				className="pizza-block__image"
				src={ imageUrl }
				alt="Pizza"
			/>
			<h4 className="pizza-block__title">{ name }</h4>
			{
				category === 0
				? <div className="pizza-block__selector">
					<ul>
						{availableTypes.map((type, index) => (
							<li
								key={ type }
								onClick={() => onSelectType(index)}
								className={classNames({
									'active': activeType === index,
									'disabled': !types.includes(index),
								})}>
								{ type }
							</li>
						))}
					</ul>
					<ul>
						{availableSizes.map((size, index) => (
							<li
								key={ size }
								onClick={() => onSelectSize(index)}
								className={classNames({
									'active': activeSize === index,
									'disabled': !sizes.includes(size)
								})}>
								{ size } см.
							</li>
						))}
					</ul>
				</div>
				: <>
						<p>{ capacity }</p>
						<p>{ title }</p>
					</>
			}

			<div className="pizza-block__bottom">
				{
					category === 0
						? <div className="pizza-block__price">от { price } ₽ </div>
						: <div className="pizza-block__price">{ price } ₽</div>

				}
				<button onClick={ onAddPizza } className="button button--outline button--add">
					<svg
						width="12"
						height="12"
						viewBox="0 0 12 12"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
							fill="white"
						/>
					</svg>
					<span>Добавить</span>
					{ addedCount && <i>{ addedCount }</i> }
				</button>
			</div>
		</div>
	)
}

export default PizzaItem

