import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { MdDelete } from 'react-icons/md';

import { Note } from '../../types';
import { ref, remove } from 'firebase/database';
import { db } from '../../services/firebase';

const NoteItem = ({ note }: { note: Note }) => {
  const {noteId} = useParams();

  const isActive = noteId === note.id;
  const activeStyle = "w-full relative border-solid border-4 border-red-400"

  const deleteNote = (event: React.MouseEvent<HTMLButtonElement>) => {
    remove(ref(db, '/notes/' + note.id));
  }

  return (
    <li className={isActive ? activeStyle :'w-full relative'} >
      <Link className='block px-3 py-2 bg-yellow-400 rounded text-black font-medium' to={`notes/${note.id}`}>
        <h4 className='mb-3'>{note.title}</h4>
        {isActive && <p className='pl-3 pr-2 py-2 w-full font-normal text-grey-50 rounded bg-white'>{note.content}</p>}
      </Link>

      <button className='absolute top-1 right-1 hover:bg-gray-100 p-1 rounded-full' onClick={deleteNote}>
        <MdDelete className='text-2xl text-red-600' />
      </button>
    </li>
  )
}

export default NoteItem;