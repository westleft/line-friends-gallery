'use client'

import { useNavigate } from 'react-router-dom'

function Category() {
  const navigate = useNavigate()
  const categories = ['All', 'Brown', 'Cony', 'Sally']

  const handleCategoryClick = (category: string) => {
    navigate(`?q=${category}`)
  }

  return (
    <ul className="w-1/4 mr-4 sticky top-4 h-fit">
      {
        categories.map(category => (
          <li
            key={category}
            onClick={() => handleCategoryClick(category)}
            className="cursor-pointer hover:bg-gray-100 p-2 rounded"
          >
            <p className="font-bold">{category}</p>
          </li>
        ))
      }
    </ul>
  )
}

export default Category
