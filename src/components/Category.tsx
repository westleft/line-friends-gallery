'use client'

import { useNavigate } from 'react-router-dom'

function Category() {
  const navigate = useNavigate()

  const categories = [
    {
      icon: 'https://www.linefriends.com/static/media/ip_lf_img01.5254b5b4c4d23dcc82aa.png',
      text: 'All',
    },
    {
      icon: 'https://www.linefriends.com/static/media/ip_lf_thumb01.57ff25157ee47ca4fb47.png',
      text: 'Brown',
    },
    {
      icon: 'https://www.linefriends.com/static/media/ip_lf_thumb02.bd499ee0e80f0f692052.png',
      text: 'Cony',
    },
    {
      icon: 'https://i.imgur.com/hs1C2HN.png',
      text: 'Sally',
    },
  ]

  const handleCategoryClick = (category: string) => {
    navigate(`?q=${category}`)
  }

  return (
    <ul className="w-1/4 mr-4 sticky top-4 h-fit">
      {
        categories.map(category => (
          <li
            key={category.text}
            onClick={() => handleCategoryClick(category.text)}
            className="flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded"
          >
            <img src={category.icon} alt={category.text} className="h-8 mr-2" />
            <p className="font-bold">{category.text}</p>
          </li>
        ))
      }
    </ul>
  )
}

export default Category
