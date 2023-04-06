import React from 'react';
import {v4 as uuidv4} from "uuid";
import { useNavigate } from 'react-router-dom';
import { set, ref } from 'firebase/database';

import { db } from '../../services/firebase';
import bg from '../../assets/images/homepage_bg.jpg'

const Home = () => {
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
    <div className='h-screen w-full relative'>
        <img className='absolute h-screen w-full z-0' src={bg} alt="bg" />
        <div className='absolute z-1 top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2'>
            <h1 className='text-homepage text-center'>Welcome to Tuduuu</h1>
            <h2 className='text-xl'>Create your own note!</h2>
            <button onClick={createNote} className='inline-block bg-teal-600 py-3 px-4 text-xl text-white mt-10 rounded '>Create your own note now!</button>
        </div>
    </div>
  )
}

export default Home