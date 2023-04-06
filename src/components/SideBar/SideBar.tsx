import React from 'react';
import { SlNotebook } from 'react-icons/sl';
import { Link } from 'react-router-dom';

import CategoryList from './CategoryList';
import NoteList from './NoteList';
import UserProfileIcon from './UserProfileIcon';
import { Category, Note } from '../../types';

const SideBar = ({ categories, notes }: { categories: Category[], notes: Note[] }) => {


  return (
    <div className="flex flex-col bg-teal-600 h-screen text-white p-3">
      {/* Logo */}
      <Link to="/" className='flex w-full items-center justify-center space-x-1'>
        <SlNotebook className='text-3xl' />
        <h1 className='text-3xl font-bold font-mono'>Tuduu</h1>
      </Link>

      <br />
      {/* Categories */}
      <div className='w-full'>
        <CategoryList categories={categories} />
      </div>

      <br />
      {/* Notes  */}
      <div className='w-full'>
        <NoteList notes={notes} />
      </div>

      <br />
      {/* User profile icon */}
      <div className='w-full'>
        <UserProfileIcon />
      </div>

    </div>
  )
}

export default SideBar;