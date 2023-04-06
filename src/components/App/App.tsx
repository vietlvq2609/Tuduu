import React , {useState, useEffect} from 'react';
import { Outlet } from 'react-router-dom';
import { onValue, ref } from 'firebase/database';
import { useNavigate } from 'react-router-dom';

import { db } from '../../services/firebase';
import { Category, Note } from '../../types';
import SideBar from '../SideBar/';

function App(): JSX.Element {
  const [categories, setCategories] = useState<Category[]>([]);
  const [notes, setNotes] = useState<Note[]>([]);
  
  const navigate = useNavigate();

  console.log('app render')
  useEffect(() => {
    onValue(ref(db, '/categories'), (snapshot) => {
      let temps : Category[] = [];
      snapshot.forEach(el => {
        temps = [...temps, {color: el.val()?.color, text: el.val()?.text}]
      });
      setCategories(temps);
    }, {
      onlyOnce: true
    });

    onValue(ref(db, '/notes'), (snapshot) => {
      if (snapshot.val()) {
        let temps: Note[] = [];
        snapshot.forEach(el => {
          if (el.key) {
            temps = [...temps, { id: el.key, title: el.val()?.title, content: el.val()?.content }]
          }
        });
        setNotes(temps);
      } else {
        setNotes([]);
        navigate('/');
      }
    });
  }, []);


  return (
    <div className='flex flex-row h-screen'>
      <div className='w-1/5 h-full'>
        <SideBar categories={categories} notes={notes} />
      </div>
      <div className='flex-1 h-full'>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
