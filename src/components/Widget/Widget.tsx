import React, { useEffect, useState } from 'react';
import { ref, onValue, set } from 'firebase/database';
import { useParams } from 'react-router-dom';

import TextEditor from './TextEditor';
import { Note } from '../../types';
import { db } from '../../services/firebase';

const Widget = () => {
    const [note, setNote] = useState<Note>({
        id: "",
        title: "",
        content: "",
    });
    const { noteId } = useParams();

    useEffect(() => {
        // get value then render it in input form
        if (noteId) {
            onValue(ref(db, `/notes/${noteId}`), snapshot => {
                if (snapshot.val()) {
                    const resNote : Note = {
                        id: noteId,
                        title: snapshot?.val()?.title,
                        content: snapshot?.val()?.content,
                    }
                    setNote(resNote);
                }
            }
            )
        }

    }, [noteId]);

    const saveNote = (e: React.MouseEvent) => {
        e.preventDefault();
        if (note) {
            set(ref(db, "/notes/" + noteId), {
                title: note.title,
                content: note.content
            });
        }
    }

    return (
        <div className='flex flex-col justify-between h-full'>
            <TextEditor note={note} setNote={setNote} />
            <div className='w-full flex-1 flex justify-center pt-16'>
                <button type='button' className='py-3 px-4 min-w-btn bg-teal-600 hover:bg-teal-900 font-semibold rounded-3xl text-white self-start' onClick={saveNote}>Save</button>
            </div>
        </div>
    )
}

export default Widget;