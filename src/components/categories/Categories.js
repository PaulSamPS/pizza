import React from 'react'
// import PropTypes from 'prop-types'

const Categories = React.memo((props) => {

	const { activeCategory, items, onClickCategory  } = props

	return (
		<div className="categories">
			<ul>
				<li className={ activeCategory === null ? 'active' : null }
					onClick={ () => onClickCategory(null) }
				>
					Все
				</li>
				{
					items && items.map((name, index) => (
						<li className={ activeCategory === index ? 'active' : null }
							onClick={ () => onClickCategory(index) }
							key={ `${ name }_${ index }` }
						>
							{ name }
						</li>
					))
				}
			</ul>
		</div>
	)
})

export default Categories