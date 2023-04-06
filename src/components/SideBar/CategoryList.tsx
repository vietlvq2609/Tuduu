import React, { useState, useEffect } from 'react';
import CategoryItem from './CategoryItem';
import { Category } from '../../types';

const CategoryList = ({categories} : {categories: Category[]}) => {
  return (
    <div className='w-full'>
      <h3 className='font-bold'>Categories</h3>
      <ul className='list-disc'>
        {categories.map((category, index) => (
          <CategoryItem key={index} category={category} />
        ))}
      </ul>
    </div>
  )
}

export default CategoryList;