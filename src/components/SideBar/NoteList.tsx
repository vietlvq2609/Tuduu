import React from 'react';
import { IoMdAddCircle } from 'react-icons/io';
import { v4 as uuidv4 } from 'uuid';
import { set, ref } from 'firebase/database';
import { useNavigate } from 'react-router-dom';

import { db } from '../../services/firebase';
import NoteItem from './NoteItem';
import { Note } from '../../types';


const NoteList = ({ notes }: { notes: Note[] }) => {
  const navigate = useNavigate();
  const createNote = () => {
    const newNote = {
      id: uuidv4(),
      title: "Add new title",
      content: "Description your note"
    }
    set(ref(db, "/notes/" + newNote.id), newNote);
    navigate(`/notes/${newNote.id}`);
  }
  
  return (
    <>
      <div className='w-full'>
        <h3 className='font-bold'>Notes</h3>
        <ul className='list-disc list-outside space-y-3 pl-6'>
          {notes.map(note => (
            <NoteItem key={note.id} note={note} />
          ))}
        </ul>
      </div>

      <br />
      <button onClick={createNote} className='w-full flex items-center justify-center space-x-2 bg-teal-900 p-2 rounded'>
        <IoMdAddCircle />
        <span>Create new</span>
      </button>
    </>
  )
}

export default NoteList;