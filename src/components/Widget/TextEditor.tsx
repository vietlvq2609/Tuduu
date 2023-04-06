import React, { useState, useEffect } from 'react';
import 'draft-js/dist/Draft.css';
// import { Editor, EditorState, RichUtils } from 'draft-js';

import pencil from "../../assets/images/pencil.png";
import { Note } from '../../types';

type Props = {
  note: Note,
  setNote: React.Dispatch<React.SetStateAction<Note>>
}

const TextEditor = ({ note, setNote }: Props) => {
  // const [editorState, setEditorState] = useState(
  //   () => EditorState.createEmpty(),
  // );
  
  return (
    <div className='flex flex-col justify-center items-center h-3/4 pt-28  w-full'>
      <div className='min-w-3/4  max-w-screen-sm h-full'>
        <div className='flex flex-col w-full h-full bg-yellow-300 p-10 rounded relative'>
          <h4 className='mb-8'>
            <input className='w-full text-center text-3xl p-4 rounded-lg' type="text" name='title' value={note?.title} onChange={e => setNote({ ...note, title: e.target.value })} />

          </h4>
          <div className='border rounded-lg border-gray-20 bg-white text-black text-2xl flex-1 p-2'>
            <textarea className='w-full h-full text-wrap p-4 bg-transparent' name="content" value={note?.content} onChange={e => setNote({ ...note, content: e.target.value })} />
            {/* <Editor editorState={editorState} placeholder='Type your todo' onChange={setEditorState} /> */}
          </div>

          <img className='absolute w-50 bottom-14 left-full -translate-x-1/2' src={pencil} alt="pencil" />
        </div>
      </div>
    </div>
  )
}



export default TextEditor;