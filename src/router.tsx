import { createBrowserRouter } from 'react-router-dom';
import App from './components/App';
import Widget from './components/Widget/Widget';
import Home from './components/Home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'notes/:noteId',
        element: <Widget />
      },
      {
        path: "",
        element: <Home />
      }
    ]
  },
  
])
