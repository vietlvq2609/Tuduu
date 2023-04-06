import React from 'react';
import { Link } from 'react-router-dom';
import { Category } from '../../types';



const CategoryItem = ({ category }: { category: Category }) => {
  return (
    <li className='pl-2' style={{backgroundColor: category.color}}>
      <Link to={`categories/${category.text.toLocaleLowerCase()}`}>{category.text}</Link>
    </li>
  )
}

export default CategoryItem